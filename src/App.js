// import module
import axios from "axios";
import React, { useEffect, useState } from "react";
import react from "react";
// import image form local src
import logo from "./assets/logo.png"
// firebase
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import firebaseProject from "./firebaseSetup.js";
// import components
// import Header from "./Header.js";
import ListOfRecipe from "./ListOfRecipe.js";
import GoTop from "./GoTop.js";
// import styling 
import './App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";





function App() {

  const [foods, setFoods] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchRecipe, setSearchRecipe] = useState("");
  const [isErrorShown, setIsErrorShown] = useState("");
  
  
  // make api call to get data
  const apiKey = "78bce36bb0eca69a6436a9c655128f6e";
  const apiID = "1dda632e";
  
  // get data from api
  useEffect(() => {
    axios({
      url: "https://api.edamam.com/search",
      method: "GET",
      dataResponse: "json",
      params: {
        app_id: apiID,
        app_key: apiKey,
        q: "pasta"
      }
    }).then((response) => {
    
      // condition to show erroe handling
      const dishes = response.data.hits;
      console.log(dishes);
      if (dishes.length === 0){
        setIsErrorShown("No data Found!");
      }else{
        setIsErrorShown(" ");
      }
      setFoods(dishes);
    }).catch( (error)=> {
      setIsErrorShown("No Data Found!");
    })
  }, [searchRecipe])
  
  
  // handle userInput 
  // const inputHandler = (e) => {
  //   setUserInput(e.target.value)
  // }
  
  // handle recipe submit button
  const handleFindRecipe = (e) => {
    e.preventDefault();
    setSearchRecipe(userInput)
    setUserInput(" ");
  }

  
// store favourite recipe under username
const [listOfRecipe, setListOfRecipe] = useState([])

  const handleRecipeList = (e) => {
    setListOfRecipe(e.target)
    console.log(e.target)
  }

  return (
    <React.Fragment>
      {/* <header>
        <nav>
          <h3>Food Hub <img className="logo" src={logo} alt="{website logo}" /></h3>
        </nav>
        <article className="wrapper">
          <div>
            <h1 className="animation-left">Explore Thousands </h1>
            <h1 className="animation-center">of</h1>
            <h1 className="animation-right" >Cusines Recipes</h1>
          </div>
          {
          isErrorShown !== "" ? <p className="errorMessage">Invalid Search, Enter Dish Name to get Recipe</p> : <p> </p>
          }
          <form action="#" onSubmit={handleFindRecipe} >
            <label htmlFor="findRecipe" className="sr-only"> Search Your Recipe here</label>
            <input type="text" id="findRecipe" placeholder="Search Recipe" onChange={inputHandler} value={userInput} />
            <button className="findRecipe">Find Recipe</button>
          </form>
        </article>
        {/* <FontAwesomeIcon icon={faAngleDoubleDown} className="downArrow" ></FontAwesomeIcon> */}
      </header> */}
      
      <section>
        <GoTop />
        <div className="wrapper">
        <ul>
          {
            foods.map((food, index) => {
              const { image, label, cuisineType, calories, url, totalNutrients } = food.recipe
              return (
                <ListOfRecipe
                  key={index}
                  foodImg={image}
                  foodLabel={label}
                  foodType={cuisineType}
                  foodCalories={calories}
                  foodFat={totalNutrients.FAT.quantity}
                  foodCarbs={totalNutrients.CHOCDF.quantity}
                  foodSugar={totalNutrients.SUGAR.quantity}
                  foodURL={url}
                />
              )
            })
          }
        </ul>
        </div>
      </section>
      <div className="find-another-recipe">
        <a href="#findRecipe">Find Recipe</a>
      </div>
      <footer>
        <p><a href="https://junocollege.com/" target="_blank">Juno College of Technology</a></p>
      </footer>
    </React.Fragment>
  );
}

export default App;