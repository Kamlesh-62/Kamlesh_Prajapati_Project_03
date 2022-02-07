import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import firebaseApp from "../../firebase/firebase"

export default function IndividualRecipe (){
    const {id} = useParams()

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect ( ()=>{
        setIsPending(true)
        firebaseApp.collection("recipes").doc(id).get().then((doc)=>{
            if(doc.exists){
                setIsPending(false)
                setRecipe(doc.data())
            }
            else{
                setIsPending(false)
                setError("No data find")
            }
        })

    },[id])

    return(
        <div>
            {error&& <p> {error}</p>}
            {isPending && <p>Loading....</p>}
            {recipe && (
                <>
                <h2>{recipe.title}</h2>
                <p>{recipe.makingTime} of cook time</p>
                <ul>
                    {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
                <p>{recipe.makingDescription}</p>
                </>
            )}
        </div>
    )
}