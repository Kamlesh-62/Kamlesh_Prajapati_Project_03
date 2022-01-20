// import module
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import react from "react";

// import image form local src
import logo from "./assets/logo.png"

// import components
import ListOfRecipe from "./ListOfRecipe.js";
import GoTop from "./GoTop.js";

// import styling 
import './App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";


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

  // handle userInput 
  // ===========
  const inputHandler = (e) => {
    setUserInput(e.target.value)
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
       <header>
        <nav>
          <h3>Food Hub <img className="logo" src={logo} alt="{website logo}" /></h3>
        </nav>
        <article className="wrapper">
          <div>
            <h1 className="animation-left">Explore Thousands </h1>
            <h1 className="animation-center">of</h1>
            <h1 className="animation-right" >Cusines Recipes</h1>
          </div>
          <form action="#" onSubmit={handleFindRecipe} >
          { 
            isErrorShown ? <p className="errorMessage">Enter Dish Name to get Recipe</p> : <p> </p>
          }
            <label htmlFor="findRecipe" className="sr-only"> Search Your Recipe here</label>
            <input type="text" id="findRecipe" placeholder="Search Recipe" onChange={inputHandler} value={userInput} />
            <button className="findRecipe">Find Recipe</button>
          </form>
        </article>
        <div className="scrollToSectionArrow" >
          { 
              foods.length > 0 ?
            <FontAwesomeIcon onClick={handleScrollToSection} icon={faAngleDoubleDown} className="downArrow" ></FontAwesomeIcon> : <div> </div>
          }
        </div> 
      </header>
    
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
                />
              )
            })
          }
        </ul>
        </div>
          {
          foods.length > 0 ? 
        <div  className="find-another-recipe">
            <a href="#findRecipe">Find Another Recipe</a> 
        </div> : <> </>
          }
      </section>
      
      <footer>
        <p><span><a href="www.devkamlesh.com" target="_blank"> &copy; Kamlesh Prajapati 2022 </a></span></p>
      </footer>
    </React.Fragment>
  );
}

export default App;