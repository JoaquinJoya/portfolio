import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import instagram from "../../images/instagram-joaquinjoyareal.svg"
import twitter from "../../images/twitter-joaquinjoyareal.svg"
import dribbble from "../../images/dribbble-joaquinjoyareal.svg"
import linkedin from "../../images/linkedin-joaquinjoyareal.svg"
import styled from "styled-components"
import React from "react"
import "../../css/styles.css"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import { Wrapper, Section, LogoContainer } from "../StyledComponents/styledComponents.js"
import CTAFooter from "./CTAFooter.js"
import {FooterContainer, FooterNavContainer, FooterSocialContainer,
    Copyright, FooterLogo, LogoWrapper, FooterNav, FooterLink, SocialMediaWrapper
    , SocialLink, SocialLogoImg
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
            <FooterNav>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/">Work</FooterLink>
                    <FooterLink to="/">About Me</FooterLink>
                    <FooterLink to="/">Blog</FooterLink>
                </FooterNav>
        </FooterNavContainer>
        <FooterSocialContainer>
            <SocialMediaWrapper>
                    <SocialLink href="https://www.instagram.com/joaquinjoyareal/">
                        <SocialLogoImg src={instagram}/>
                    </SocialLink>
                    <SocialLink href="https://twitter.com/joaquinjoyareal">
                        <SocialLogoImg src={twitter}/>
                    </SocialLink>
                    <SocialLink href="https://dribbble.com/joaquinjoyareal">
                        <SocialLogoImg src={dribbble}/>
                    </SocialLink> <SocialLink href="https://www.linkedin.com/in/joaquinjoyareal/">
                        <SocialLogoImg src={linkedin}/>
                    </SocialLink>
            </SocialMediaWrapper>
        </FooterSocialContainer>
    </FooterContainer>
</footer>

 
)


export default Footer