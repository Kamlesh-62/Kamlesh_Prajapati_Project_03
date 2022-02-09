// import hooks
import { useRef, useState } from "react";

// import firebase
import firebaseApp from "../../firebase/firebase"

// import styling
import "./creatRecipe.scss"

const CreatRecipe = () => {
    const [title, setTitle] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [ingredients,setIngredients] = useState('')
    const [listOfIngredients,setListOfIngredients] = useState([])
    const ingredientsInput =useRef(null)

    // store input value into state... and add it on firestore database
    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = { title, listOfIngredients, recipeDescription, cookingTime: cookingTime + " minutes " }

        try{
            await firebaseApp.collection("recipes").add(doc)
        } catch(error){
            console.log(error)
        }
        setTitle("")
        setRecipeDescription("")
        setCookingTime("")
        
    }

    const handleRecipeTitle =(e) => {
        setTitle(e.target.value);
    }
    const handleRecipeMaking =(e) => {
        setRecipeDescription(e.target.value)
    }
    const handleIngredients = (e) => {
        setIngredients(e.target.value)
    }

    // handle multiple ingredients
    const handleAddIngredients = (e) => {
        e.preventDefault()
        const ing = ingredients.trim()

        if(ing && !listOfIngredients.includes(ing)){
            setListOfIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setIngredients("")
        ingredientsInput.current.focus()
    }

    return(
        <div className="creatRecipes">
            <h2>Create New Recipes </h2>
            <form action="#" onSubmit={handleSubmit}>

                <label htmlFor="recipeTitle" className="sr-only"> Recipe Title</label>
                <input type="text" id="recipeTitle" 
                placeholder="Recipe Title" 
                onChange={handleRecipeTitle} 
                value={title} required/>

                
                <label htmlFor="listOfIngredients" className="sr-only ">Add Ingredients</label>
                <div className="ingredients-input">
                    <input type="text" id="listOfIngredients" 
                    onChange={handleIngredients} 
                    value={ingredients}
                    ref={ingredientsInput}
                    className="listOfIngredients"
                    placeholder="Add Ingredients"
                    />
                    <button onClick={handleAddIngredients} className="addIngredientsBtn" >Add</button>
                </div>
                <small>{listOfIngredients.map(i => <em key={i}>{i}, </em>)}</small>
               

                <label htmlFor="makingDescription" className="sr-only">Making Description</label>
                <textarea type="text" id="makingDescription" rows={7}
                placeholder="Making Description" 
                value={recipeDescription} 
                onChange={handleRecipeMaking} required/>

                <label htmlFor="makingTime" className="sr-only"> Making Time</label>
                <input type="number" id="makingTime" 
                placeholder="Making Time" 
                onChange={ (e) => setCookingTime(e.target.value)} 
                value={cookingTime} required/>

                <button className="submitBtn">Submit</button>

            </form>
        </div>
    )
}
export default CreatRecipe;