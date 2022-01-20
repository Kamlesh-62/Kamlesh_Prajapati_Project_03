// import react from "react";
// import { useState } from "react";
// import './App.scss';

// const Header = ({handleFindRecipe}) => {

//     const inputHandler = (e) => {
//         setUserInput(e.target.value)
//     }

//     return (
//         <react.Fragment>
//             <header>
//                 <nav>
//                     <h3>Food Hub <img className="logo" src={logo} alt="{website logo}" /></h3>
//                 </nav>
//                 <article className="wrapper">
//                     <div>
//                         <h1 className="animation-left">Explore Thousands </h1>
//                         <h1 className="animation-center">of</h1>
//                         <h1 className="animation-right" >Cusines Recipes</h1>
//                     </div>
//                     {
//                         isErrorShown !== "" ? <p className="errorMessage">Invalid Search, Enter Dish Name to get Recipe</p> : <p> </p>
//                     }
//                     <form action="#" onSubmit={handleFindRecipe} >
//                         <label htmlFor="findRecipe" className="sr-only"> Search Your Recipe here</label>
//                         <input type="text" id="findRecipe" placeholder="Search Recipe" onChange={inputHandler} value={userInput} />
//                         <button className="findRecipe">Find Recipe</button>
//                     </form>
//                 </article>
//                 {/* <FontAwesomeIcon icon={faAngleDoubleDown} className="downArrow" ></FontAwesomeIcon> */}
//             </header>
//         </react.Fragment>
//     )
// }

// export default Header;