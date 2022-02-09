// import router link
import {Link} from "react-router-dom"

// import firebase
import firebaseApp from "../../firebase/firebase"

// import styling here
import "./yourRecipeList.scss"

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export function YourRecipeList ({recipes}) {
    const handleDeleteRecipe = (id) => {
        firebaseApp.collection("recipes").doc(id).delete()
    }

    return(
        <div className="yourRecipeList wrapper" >
            {
                recipes.map(recipe => ( 
                    <div className="recipeList" key= {recipe.id}>
                        <h3>{recipe.title}</h3>
                        <div className="recipeDescription"> <span>Recipe:</span> {recipe.recipeDescription.substring(0, 75)}...</div>
                        <p><span>Cooking Time:</span> {recipe.cookingTime}</p>
                        <Link to={`/yourrecipelist/${recipe.id}`} >Get Recipe</Link>
                        <div className="deleteBtn"><span onClick={() => handleDeleteRecipe(recipe.id)} ><FontAwesomeIcon icon={faTrash} /></span></div>
                    </div>
                ))}
        </div>
    )
}