import react from "react";
import "./App.scss";



const ListOfRecipe = (props) => {
    const { foodImg, foodLabel, foodType, foodCalories, foodFat, foodCarbs, foodSugar, foodURL } = props;
    return (
        <react.Fragment>
            <ul>
                <li>
                    <img src={foodImg} alt={foodLabel} />
                    <h2>{foodLabel}</h2>
                    <p>Cusine Type: {foodType}</p>
                    <h3>Nutritions</h3>
                    <p>Calories: {Math.trunc(foodCalories)}</p>
                    <p>Carbs: {Math.trunc(foodCarbs)}g</p>
                    <p>Fat: {Math.trunc(foodFat)}g</p>
                    <p>Sugar: {Math.trunc(foodSugar)}g</p>
                    <a href={foodURL} target="_blank">Get Full Recipe</a>
                </li>
            </ul>
        </react.Fragment>
    )
}
export default ListOfRecipe;