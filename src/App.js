// import module
import axios from "axios";
import React, {  useState, useRef } from "react";

// import image form local src
import logo from "./assets/logo.png"

// import components
import ListOfRecipe from "./components/ListOfRecipe.js";
import GoTop from "./components/GoTop.js";
import Home from "./components/Home";
import {Footer} from "./components/Footer"

// import styling 
import './App.scss';



function App() {

  const [foods, setFoods] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [isButtonVisiable, setIsButtonVisiable] = useState(false);
  
  
  // api key and ID
  const apiKey = "78bce36bb0eca69a6436a9c655128f6e";
  const apiID = "1dda632e";
    
  // handle recipe submit button to get data from api and print onpage
  const handleFindRecipe = (e) => {
    e.preventDefault();
    
    axios({
      url: "https://api.edamam.com/search",
      method: "GET",
      dataResponse: "json",
      params: {
        app_id: apiID,
        app_key: apiKey,
        q: userInput
      }
    }).then((response) => {
      // condition to show erroe handling
      const dishes = response.data.hits; 

      // condition to show Error handler message on page
      if (dishes.length < 1) {
        setIsErrorShown(true);
      } else {
        setIsErrorShown(false);
      }
      setFoods(dishes);
    }).catch((e) => {
      setIsErrorShown(e,"No Data Found!");
    })
    
    // condition to show down arrow to go  recipe section
    if (isButtonVisiable === false) {
      setIsButtonVisiable(true)
    }else{
      setIsButtonVisiable(false)
    } 
    setUserInput(" ");
  }

  // scroll to recipe section
// ===============================  
  const recipeSectionRef = useRef()
  
  const handleScrollToSection = () => {
    recipeSectionRef.current.scrollIntoView(
      {behavior: "smooth"}
      )
  }



  return (
    <React.Fragment>
      <Home 
        foods={foods}
        handleFindRecipe={handleFindRecipe}
        isErrorShown={isErrorShown}
        userInput={userInput}
        setUserInput={setUserInput}
        handleScrollToSection={handleScrollToSection}
        />
      
      <section>
        <GoTop 
          findRecipeHandler={handleFindRecipe}
        />
        <div className="wrapper">
        <ul ref={recipeSectionRef}>
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
                  serving = {food.recipe.yield}
                />
              )})}
        </ul>
        </div>
          {
          foods.length > 0 ? 
        <div  className="find-another-recipe">
            <a href="#findRecipe">Find Another Recipe</a> 
        </div> : <> </>
          }
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default App;