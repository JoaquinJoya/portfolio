/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
    /*(function(){
  


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
        };*/

        (function(){
        
          
            class Component {
                  
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
            
            class Menu extends Component {
              
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
            
            let demoMenu = new Menu ({
              menuNode: jsMenuNode
            });
            
            function callMenuToggle() {
              demoMenu.toggleMenuState('js-menu_activated');
            }
            
            jsMenuNode.querySelector('.js-menu__toggle').addEventListener('click', callMenuToggle);
          })();
  }