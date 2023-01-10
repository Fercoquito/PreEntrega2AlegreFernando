import "./NavBar.css";
import CartWidget from "../CartWitget/CartWidget";

export default function NavBar() {
    return (
      
      <div>
        <div className="navBar">
          <div className="Logo">
            <img className="Logo-Img"src="./assets/img/Logo/01.png" alt="logo" />
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="/">Camisetas Internacionales</a>
              </li>
              <li>
                <a href="/">Camisetas Nacionales</a>
              </li>
              <li>
                <a href="/">Shorts</a>
              </li>
              <li>
                <a href="/"><CartWidget/></a>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
      
    );
  }