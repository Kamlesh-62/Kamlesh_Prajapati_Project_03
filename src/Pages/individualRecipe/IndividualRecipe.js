// import hooks
import { useEffect, useState } from "react"
// import router
import { useParams } from "react-router-dom"
// import firebase
import firebaseApp from "../../firebase/firebase"
// import styling
import "./individualRecipe.scss"


export default function IndividualRecipe (){
    const {id} = useParams()

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    // getting recipe from firebase
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
            {error && <p className="error"> {error}</p>}
            {isPending && <div className="loader"></div>}
            {recipe && (
                <>
                <div className="individualRecipe" >
                    <h2 className="recipeTitle">{recipe.title}</h2>
                        <p className="cookingTime"><span>Cooking Time: </span> {recipe.cookingTime}</p>
                    <ul className="listOfIngredients">
                        Ingredients:
                        {
                        recipe.listOfIngredients.map(ingredient => <li className="ingredient" key={ingredient}>{ingredient} , </li>)
                        }
                    </ul>
                    <p className="recipeDescription">RECIPE:
                    <br />
                    <br />
                    <span>{recipe.recipeDescription}</span></p>
                </div>
                </>
            )}
        </div>
    )
}