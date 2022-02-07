// import module
import axios from "axios";
import React, {  useState, useRef } from "react";

import { Route,Routes } from "react-router-dom";

// import components
import Navbar from "./sections/Navbar.js";
import CreatRecipe from "./Pages/CreatRecipe.js";
import YourRecipe from "./Pages/YourRecipe";
import ListOfRecipe from "./Pages/ListOfRecipe.js";
import Home from "./sections/Home";
import GoTop from "./components/GoTop.js";
import {Footer} from "./sections/Footer"
import IndividualRecipe from "./Pages/IndividualRecipe"

// import styling 
import './App.scss';

function App() {

  const [foods, setFoods] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  
  
  // api key and ID
  const apiKey = "78bce36bb0eca69a6436a9c655128f6e";
  const apiID = "1dda632e";
    
  // handle recipe submit button to get data from api and print on page
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
      // condition to show error handling
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
    if (isButtonVisible === false) {
      setIsButtonVisible(true)
    }else{
      setIsButtonVisible(false)
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
      <Navbar />

      <Routes>
        <Route path="/" element=
        {<>  
            <Home
              foods={foods}
              handleFindRecipe={handleFindRecipe}
              isErrorShown={isErrorShown}
              userInput={userInput}
              setUserInput={setUserInput}
              handleScrollToSection={handleScrollToSection}
              />
            <section>
              <GoTop findRecipeHandler={handleFindRecipe} 
              />
              <div className="wrapper">
                <ul ref={recipeSectionRef}>
                  {foods.map((food, index) => {
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
                        serving={food.recipe.yield}
                        recipeSectionRef={recipeSectionRef}
                      />
                      )})}
                </ul>
              </div>
              {foods.length > 0 ?
                  <div className="find-another-recipe">
                    <a href="#findRecipe">Find Another Recipe</a>
                  </div> : <> </>}
            </section>
          </>}
          />
        <Route path="/creatrecipe" element={<CreatRecipe />} />
        <Route path="/recipeList" element={<YourRecipe />} />
        <Route path="/yourrecipelist/:id" element={<IndividualRecipe />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;