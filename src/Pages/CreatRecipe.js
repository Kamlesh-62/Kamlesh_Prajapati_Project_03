import { useRef, useState } from "react";
import "./creatRecipe.scss"
import firebaseApp from "../firebase/firebase"


const CreatRecipe = () => {
    const [title, setTitle] = useState("")
    const [makingDescription, setMakingDescription] = useState("")
    const [makingTime, setMakingTime] = useState("")
    const [ingredients,setIngredients] = useState('')
    const [listOfIngredients,setListOfIngredients] = useState([])
    const ingredientsInput =useRef(null)

    // store input value into state...
    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = {title, ingredients, makingDescription,makingTime:makingTime + "minutes" }
        try{
            await firebaseApp.collection("recipes").add(doc)
        } catch(error){
            console.log(error)
        }
        setTitle("")
        setMakingDescription("")
        setMakingTime("")
    }

    const handleRecipeTitle =(e) => {
        setTitle(e.target.value);
        
    }
    const handleRecipeMaking =(e) => {
        setMakingDescription(e.target.value)
    }
    const handleIngredients = (e) => {
        setIngredients(e.target.value)
    }
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
            <h2>Create New Recipes 🥗</h2>
            <form action="#" onSubmit={handleSubmit}>

                <label htmlFor="recipeTitle" className="sr-only"> Recipe Title</label>
                <input type="text" id="recipeTitle" 
                placeholder="Recipe Title" 
                onChange={handleRecipeTitle} 
                value={title} required/>

                
                <div>
                    <label htmlFor="listOfIngredients" className="sr-only ">Add Ingredients</label>
                    <input type="text" id="listOfIngredients" 
                    onChange={handleIngredients} 
                    value={ingredients}
                    ref={ingredientsInput}
                    className="listOfIngredients"
                    placeholder="Add Ingredients"
                    />
                    <button onClick={handleAddIngredients} className="addIngredientsBtn" >Add</button>
                </div>
               

                <label htmlFor="makingDescription" className="sr-only">Making Description</label>
                <textarea type="text" id="makingDescription" rows={7}
                placeholder="Making Description" 
                value={makingDescription} 
                onChange={handleRecipeMaking} required/>

                <label htmlFor="makingTime" className="sr-only"> Making Time</label>
                <input type="number" id="makingTime" 
                placeholder="Making Time" 
                onChange={ (e) => setMakingTime(e.target.value)} 
                value={makingTime} required/>

                <button className="submitBtn">Submit</button>

            </form>
        </div>
    )
}
export default CreatRecipe;