import react from "react";
import "./App.scss";



const ListOfRecipe = (props) => {
    const { foodImg, foodLabel, foodType, foodCalories, foodFat, foodCarbs, foodSugar, foodURL } = props;
    return (
        <react.Fragment>
                <li>
                    <img src={foodImg} alt={foodLabel} />
                    <h3>{foodLabel}</h3>
                    <p>Cusine Type: {foodType}</p>
                    <h4>Nutritions</h4>
                    <p>Calories: {Math.trunc(foodCalories)}</p>
                    <p>Carbs: {Math.trunc(foodCarbs)}g</p>
                    <p>Fat: {Math.trunc(foodFat)}g</p>
                    <p>Sugar: {Math.trunc(foodSugar)}g</p>
                    <button><a href={foodURL} target="_blank">Get Full Recipe</a></button>
                </li>
        </react.Fragment>
    )
}
export default ListOfRecipe;