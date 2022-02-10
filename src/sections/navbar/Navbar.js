// import logo
import logo from "../../assets/logo.png"

// import router link
import {Link} from 'react-router-dom'

// import style sheet
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    
    return(
        <header className="navbar">
            <nav>
                <div>
                    <Link to="/"><h3>Food Hub <img className="logo" src={logo} alt="{website logo}" /></h3></Link>
                </div>

                
                <label htmlFor="hamburgerToggle"><div>
                    <FontAwesomeIcon className="hamburgerMenu" icon={faBars} />
                </div></label>
                <input type="checkbox" id="hamburgerToggle" className="toggelMenu"/>
                <div className="creatRecipeMenu">
                    <ul>
                        <li className="creatRecipe">
                            <Link to="/creatrecipe">Creat Recipe</Link>
                        </li>
                        <li>
                            <Link to="/recipeList">Recipe List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;