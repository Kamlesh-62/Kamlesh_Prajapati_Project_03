// import component here
import { YourRecipeList } from "../yourRecipeList/YourRecipeList";
// import firebase 
import  firebaseApp from "../../firebase/firebase"
// import hooks
import { useEffect, useState } from "react";
// import styling
import "./yourRecipe.scss"

const YourRecipe = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect ( () => {
        setIsPending(true)

       const clearSub = firebaseApp.collection("recipes").onSnapshot((snapshot) => {
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
           setError("No recipes data")
            setIsPending(false)
        })
        return () => clearSub()
    },[])

    return(
        <div>
            {error && <p className="error">{error}</p>}
            {isPending && <div className="loader"></div>}
            {data && <YourRecipeList recipes={data}/>}  
        </div>
    )
}
export default YourRecipe;