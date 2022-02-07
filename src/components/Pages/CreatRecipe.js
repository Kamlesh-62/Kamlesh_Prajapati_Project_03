import { useRef, useState } from "react";
import "./creatRecipe.scss"
import firebaseApp from "../../firebase/firebase"


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
        <div>
            <h2>Add a New Recipe</h2>
            <form action="#" onSubmit={handleSubmit}>

                <label htmlFor="recipeTitle"> Recipe Title</label>
                <input type="text" id="recipeTitle" 
                placeholder="Recipe Title" 
                onChange={handleRecipeTitle} 
                value={title} required/>

                <label htmlFor="listOfIngredients">Add Ingredients</label>
                <input type="text" id="listOfIngredients" 
                onChange={handleIngredients} 
                value={ingredients}
                ref={ingredientsInput}
                />
                <button onClick={handleAddIngredients}>Add Ingredients</button>

                <label htmlFor="makingDescription">Making Description</label>
                <textarea type="text" id="makingDescription" 
                placeholder="Making Description" 
                value={makingDescription} 
                onChange={handleRecipeMaking} required/>

                <label htmlFor="makingTime"> Making Time</label>
                <input type="number" id="makingTime" 
                placeholder="Making Time" 
                onChange={ (e) => setMakingTime(e.target.value)} 
                value={makingTime} required/>

                <button>Submit</button>

            </form>
        </div>
    )
}
export default CreatRecipe;