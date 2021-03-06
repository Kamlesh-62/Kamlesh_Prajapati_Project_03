// import react
import react from "react";
// import stylings
import"./listOfRecipe.scss"

const ListOfRecipe = (props) => {

    const { foodImg, foodLabel, foodType, foodCalories, foodFat, foodCarbs, foodSugar, foodURL, serving } = props;
    return (
        <react.Fragment>
                <li>
                    <img src={foodImg} alt={foodLabel} />
                    <h3>{foodLabel}</h3>
                    <p>Cuisine Type: {foodType}</p>
                    <h4>Nutrition</h4>
                    <p>Calories: {Math.trunc(foodCalories)}</p>
                    <p>Carbs: {Math.trunc(foodCarbs)}g</p>
                    <p>Fat: {Math.trunc(foodFat)}g</p>
                    <p>Sugar: {Math.trunc(foodSugar)}g</p>
                    <p>Serving: {serving}{
                        serving > 1 ? <span> people </span> : <span> person </span>
                    }       
                    </p>
                <button><a href={foodURL} rel="noreferrer" target="_blank">Get Full Recipe</a></button>
                </li>
        </react.Fragment>
    )
}
export default ListOfRecipe;