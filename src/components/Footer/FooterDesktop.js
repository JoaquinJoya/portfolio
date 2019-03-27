import React from "react"
import FooterNavCont from "./FooterNavCont.js"
import FooterSocial from "./FooterSocial.js"

import { Wrapper } from "../StyledComponents/styledComponents.js"

import { FooterDesktopContainer, FooterWrap } from "./footer.style.js"


const FooterDesktop = () => (
   <FooterDesktopContainer>
       <Wrapper>
           <FooterWrap>
            <FooterNavCont/>
                <FooterSocial/>
           </FooterWrap>
       </Wrapper>
   </FooterDesktopContainer>
)

export default FooterDesktop