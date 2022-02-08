import { YourRecipeList } from "./YourRecipeList";
import  firebaseApp from "../firebase/firebase"
import { useEffect, useState } from "react";

const YourRecipe = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect ( () => {
        setIsPending(true)

        const unSub = firebaseApp.collection("recipes").onSnapshot((snapshot) => {
            if(snapshot.empty){
                setError("No recipes data")
                setIsPending(false)
            }else{
                let results =[]
                snapshot.docs.forEach((doc) => {
                    results.push({ id:doc.id, ...doc.data() })
                })
                setIsPending(false)
                setData(results)
            }    
        },(error)=>{
            setError(error.message)
            setIsPending(false)
        })
        return () => unSub()
    },[])
    // console.log(data)

    return(
        <div>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <YourRecipeList recipes={data}/>}  
        </div>
    )
}
export default YourRecipe;