import "./NavBar.css";
import CartWidget from "../CartWitget/CartWidget";
import { Link } from "react-router-dom";
import Button, {ButtonChild} from "../Button/Button";
import UserMenu from "./UserMenu";


 function NavBar({ onLogin}) {
  let inputUsername = "Cris";

    return (
      
      <div>
        <div className="navBar">
         
          <div className="Logo">
          <Link to="/">
            <img className="Logo-Img"src="./assets/img/Logo/01.png" alt="logo" />
            </Link>
          </div>
         
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/category/Camisetas Internacionales">Camisetas Internacionales</Link>
              </li>
              <li>
                <Link to="/category/Camisetas Nacionales">Camisetas Nacionales</Link>
              </li>
              <li>
                <Link to="/category/id">Shorts</Link>
                
              </li>
              <li>
                <Link to="/Contacto">Contacto</Link>
              </li>
                         
              
              <li>
                <Link to="/"><CartWidget/></Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
      
    );
  }

  export default NavBar;