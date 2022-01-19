
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './App.scss';
import { useEffect } from "react/cjs/react.development";


const GoTop = () => {
    const[showButton, setShowButton] = useState("false");

    // 
    useEffect ( ()=> {
        window.addEventListener("scroll", showButtonVisibilty)
    }, [])

    const showButtonVisibilty = () => {
        if(window.pageYOffset > 350){
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