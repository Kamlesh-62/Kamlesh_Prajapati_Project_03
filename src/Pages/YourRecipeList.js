import {Link} from "react-router-dom"
import firebaseApp from "../firebase/firebase"


export function YourRecipeList ({recipes}) {

    const handleDeleteRecipe = (id) => {
        firebaseApp.collection("recipes").doc(id).delete()
    }

    return(
        <div>
            {
                recipes.map(recipe => ( 
                    <div key= {recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.makingTime} to make.</p>
                        <div>{recipe.makingDescription.substring(0, 100)}...</div>
                        <Link to={`/yourrecipelist/${recipe.id}`} >Cook this</Link>
                        <div onClick={() =>handleDeleteRecipe(recipe.id)}>X</div>
                        
                    </div>
                ))}
        </div>
    )
}