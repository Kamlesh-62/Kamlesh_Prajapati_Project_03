// import logo
import logo from "../assets/logo.png"
import {Link} from 'react-router-dom'
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return(
        <header className="navbar">
            <nav>
                <div>
                    <Link to="/"><h3>Food Hub <img className="logo" src={logo} alt="{website logo}" /></h3></Link>
                </div>
                <div>
                    <ul>
                        <li className="creatRecipe">
                            <Link to="/creatrecipe">Creat Recipe</Link>
                        </li>
                        <li>
                            <Link to="/recipeList">Recipe <FontAwesomeIcon className="awesomeBtn" icon={faListUl} /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;