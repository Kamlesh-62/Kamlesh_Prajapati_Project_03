
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import './App.scss';


const GoTop = ({ findRecipeHandler}) => {
    const[showButton, setShowButton] = useState("false");

    // 
    useEffect ( ()=> {
        window.addEventListener("scroll", showButtonVisibilty)
    }, [])

    const showButtonVisibilty = (findRecipeHandler) => {
        if(window.pageYOffset > 330){
            setShowButton(true);
        }else{
            setShowButton(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo( {
            top:0,
            behavior:"smooth"
        })
    }

    // const handleVisibility 
    return(
        <div>
            { showButton &&
                <div onClick={scrollTop} >
                <FontAwesomeIcon icon={faUtensilSpoon} className="goToTopSpoon"/>
                </div>
            }
        </div>
    )
}

export default GoTop;