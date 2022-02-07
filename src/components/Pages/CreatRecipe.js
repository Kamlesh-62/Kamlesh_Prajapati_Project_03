import { useRef, useState } from "react";
import "./creatRecipe.scss"

const CreatRecipe = () => {
    const [recipeTitle, setRecipeTitle] = useState("")
    const [making, setMaking] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [ingredients,setIngredients] = useState('')
    const [listOfIngredients,setListOfIngredients] = useState([])
    const ingredientsInput =useRef(null)

    // store input value into state...
    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(listOfIngredients, cookingTime, making, recipeTitle)
    }

    const handleRecipeTitle =(e) => {
        setRecipeTitle(e.target.value);
    }
    const handleRecipeMaking =(e) => {
        setMaking(e.target.value)
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
                value={recipeTitle} required/>

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
                value={making} 
                onChange={handleRecipeMaking} required/>

                <label htmlFor="makingTime"> Making Time</label>
                <input type="number" id="makingTime" 
                placeholder="Making Time" 
                onChange={ (e) => setCookingTime(e.target.value)} 
                value={cookingTime} required/>

                <button>Submit</button>

            </form>
        </div>
    )
}
export default CreatRecipe;