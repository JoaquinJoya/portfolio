import { Link } from "gatsby"
import React from "react"
import "./headerStyles.css"
import "./hamburgerInteraction.js"

window.onload=function(){
  

  class ComponentMenu {
        
    printError(error) {
 
      if (typeof error !== 'string' || error.length === 0) {
        return console.log('you did not give arguments');
      }
      
      return console.log(error);
    }    
    
    toggleСlass(node, className) {
      return  node.classList.toggle(className);
    }    
  }
  
  class MenuMobile extends ComponentMenu {
    
    constructor(settings) {
      super();
      this.menuNode = settings.menuNode;
    }
    
    toggleMenuState(className) {      
      
      if (typeof className !== 'string' || className.length === 0){
        return super.printError('you did not give the class name for the toggleState function');
      } 
      
      return super.toggleСlass(this.menuNode, className);
    }
  }

  let jsMenuNode = document.querySelector('body');
  
  let demoMenu = new MenuMobile ({
    menuNode: jsMenuNode
  });
  
  function callMenuToggle() {
    demoMenu.toggleMenuState('js-menu_activated');
  }
  
  jsMenuNode.querySelector('.js-menu__toggle').addEventListener('click', callMenuToggle);
};

const Menu = () => (
    <header className="header">
        <div className="hamburger">
            <button className="button hamburger__button js-menu__toggle">
                <span className="hamburger__label">Open Menu</span>
            </button>
        </div>
        <nav className="menu">
            <ul className="list menu__list">
                <li className="menu__group"><Link to="/" className="link menu__link">Home</Link></li>
                <li className="menu__group"><Link to="/" className="link menu__link">Work</Link></li>
                <li className="menu__group"><Link to="/" className="link menu__link">About Me</Link></li>
                <li className="menu__group"><Link to="/" className="link menu__link">Blog</Link></li>
                <li className="menu__group"><Link to="/" className="link menu__link">Contact Me</Link></li>
            </ul>

        </nav>
    </header>
) 


export default Menu