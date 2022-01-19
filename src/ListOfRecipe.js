import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";
import React, { useEffect, useState, useRef } from "react";
import "./App.scss";
import { FontAwesome } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import firebaseProject from "./firebaseSetup.js";






const ListOfRecipe = (props) => {

    const handleClick = (event) => {
        const database = getDatabase(firebaseProject)
        const dataAddress = ref(database)
        
    }


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
                <div ><FontAwesomeIcon icon={faPlus} className="saveButton" /></div>
                
                </li>
        </react.Fragment>
    )
}
export default ListOfRecipe;