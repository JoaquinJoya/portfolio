/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
    (function(){
  


        var menuIn = document.querySelector('.HeaderActivated')
        
       
            function toggleMenu(){
                menuIn.classList.toggle('js-menu_activated');
              } 
              menuIn.querySelector('.js-menu__toggle').addEventListener('click', toggleMenu);
        
    
        
        
        })();
  }