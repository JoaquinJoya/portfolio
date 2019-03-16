import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import styled from "styled-components"
import React from "react"
import "../../css/styles.css"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import { Wrapper, Section, LogoContainer } from "../StyledComponents/styledComponents.js"
import CTAFooter from "./CTAFooter.js"
import {FooterContainer, FooterNavContainer, FooterSocialContainer,
    Copyright, FooterLogo, LogoWrapper
} from "./footer.style.js"


const Footer = () => (

<footer>
    <Section blue>
        <CTAFooter/>
    </Section>
    <FooterContainer>
        <FooterNavContainer>
            <LogoWrapper>
                    <LogoContainer to="/">
                    <img style={{
                    maxWidth: `inherit`
                    }} src={logo} alt="Joaquin Joya"/>
                    </LogoContainer>
                <Copyright>Copyright @ 2019 | Joaquin Joya</Copyright>
            </LogoWrapper>
        </FooterNavContainer>
        <FooterSocialContainer>
            
        </FooterSocialContainer>
    </FooterContainer>
</footer>

 
)


export default Footer