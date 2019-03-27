import React from "react"
import "../../css/styles.css"
import FooterDesktop from "./FooterDesktop.js"
import CTAFooter from "./CTAFooter.js"
import FooterMobile from "./FooterMobile.js"




const Footer = () => (

<footer>
    {/*Want to work with me Section*/}
    <CTAFooter/>

    {/*Footer Mobile*/}
    <FooterMobile/>

    {/*Footer Desktop*/}
    <FooterDesktop/>
        

</footer>

 
)


export default Footer