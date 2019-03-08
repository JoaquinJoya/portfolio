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

        document.onkeydown = function(evt) {
            evt = evt || window.event;
            var mobileMenuClass = document.querySelector('.HeaderActivated');
            if (evt.keyCode === 27) {
                mobileMenuClass.classList.remove("js-menu_activated")
            }
        };
  }