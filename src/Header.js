import logo from "./assets/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {

    
    return(
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
                {

                }
                {/* <form action="#" onSubmit={handleFindRecipe} >
                    {
                        isErrorShown ? <p className="errorMessage">Enter Dish Name to get Recipe</p> : <p> </p>
                    }
                    <label htmlFor="findRecipe" className="sr-only"> Search Your Recipe here</label>
                    <input type="text" id="findRecipe" placeholder="Search Recipe" onChange={inputHandler} value={userInput} />
                    <button className="findRecipe">Find Recipe</button>
                </form> */}
            </article>
            <div className="scrollToSectionArrow" >
                {
                    props.foods.length > 0 ?
                        <FontAwesomeIcon onClick={props.handleScrollToSection} icon={faAngleDoubleDown} className="downArrow" ></FontAwesomeIcon> : <div> </div>
                }
            </div>
        </header>

    )
}




export default Header;