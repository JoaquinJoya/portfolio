import { Link } from "gatsby"
import React from "react"
import "./headerStyles.css"

 



const Menu = () => (
    <header className="header header-mobile">
        <div className="hamburger">
            <button className="button hamburger__button js-menu__toggle">
                <span className="hamburger__label">Open Menu</span>
            </button>
        </div>
        <nav className="menu">
            <ul className="list menu__list">
                <li className="menu__group"><Link to="/" className="link menu__link">Home</Link></li>
                <li className="menu__group"><Link to="/work" className="link menu__link">Work</Link></li>
                <li className="menu__group"><Link to="/about" className="link menu__link">About Me</Link></li>
                <li className="menu__group"><Link to="/" className="link menu__link">Blog</Link></li>
                <li className="menu__group"><Link to="/" className="link menu__link">Contact Me</Link></li>
            </ul>

        </nav>
        
    </header>




) 




export default Menu