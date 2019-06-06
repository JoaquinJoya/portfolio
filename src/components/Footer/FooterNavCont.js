import React from "react"
import logo from "../../images/logo.svg"
import {  LogoContainer } from "../StyledComponents/styledComponents.js"
import { FooterNavContainer,
    Copyright,  LogoWrapper, FooterNav, FooterLink, FooterNavWrapper
} from "./footer.style.js"

const FooterNavCont = () => (
    <FooterNavContainer>
            <FooterNavWrapper>
            <LogoWrapper>
                    <LogoContainer to="/">
                    <img style={{
                    maxWidth: `inherit`
                    }} src={logo} alt="Joaquin Joya"/>
                    </LogoContainer>
                <Copyright>Copyright @ 2019 | Joaquin Joya</Copyright>
               
            </LogoWrapper>
            <FooterNav>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/work">Work</FooterLink>
                    <FooterLink to="/about">About Me</FooterLink>
                    <FooterLink to="/blog">Blog</FooterLink>
                </FooterNav>
            </FooterNavWrapper>

            
        </FooterNavContainer>
)

export default FooterNavCont