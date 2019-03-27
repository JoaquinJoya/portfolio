import React from "react"
import FooterNavCont from "./FooterNavCont.js"
import FooterSocial from "./FooterSocial.js"
import { FooterContainer } from "./footer.style.js"

const FooterMobile = () => (
    <FooterContainer>
                <FooterNavCont/>
                <FooterSocial/>
    </FooterContainer>
)

export default FooterMobile