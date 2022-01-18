import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import ListOfRecipe from "./ListOfRecipe.js";
import react from "react";
import logo from "./assets/logo.png"
import './App.scss';



function App() {

  const [foods, setFoods] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchRecipe, setSearchRecipe] = useState("");

  
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
        q: searchRecipe
      }
    }).then((response) => {
      console.log(response.data.hits);
      setFoods(response.data.hits);
      errorMessage(response.data.hits)
    })
  }, [searchRecipe])
  
  const errorMessage = (array) => {
    array.length < 1 ? console.log('yes') : console.log("no");
  }

  const inputHandler = (e) => {
    setUserInput(e.target.value)
  }

  const handleFindRecipe = (e) => {
    e.preventDefault();
    setSearchRecipe(userInput)
    setUserInput(" ");
  }

  return (
    <React.Fragment>
      <header>
        <nav>
          <h3>Food Hub <img className="logo" src={logo} alt="{website logo}" /></h3>
        </nav>
        <article className="wrapper">
          <div>
            <h1>Explore Thousands </h1>
            <h1>of</h1>
            <h1>Cusines Recipes</h1>
          </div>
          <form action="#" onSubmit={handleFindRecipe} >
            <label htmlFor="findRecipe" className="sr-only"> Search Your Recipe here</label>
            <input type="text" id="findRecipe" placeholder="Search Recipe" onChange={inputHandler} value={userInput} />
            <button>Find Recipe</button>
          </form>
        </article>
      </header>
      <section>
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
        <a href="#findRecipe">Find Another Recipe</a>
      </div>
      <footer>
        <p><a href="https://junocollege.com/" target="_blank">Juno College of Technology</a></p>
      </footer>
    </React.Fragment>
  );
}

export default App;