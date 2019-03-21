import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import "../../css/styles.css" 


export const FooterContainer = styled.div `
    display: flex;
    flex-direction: column;

`

export const FooterNavContainer = styled.div `
    background: ${colors.pinkSpecial};  
    margin: 0 auto;
    padding: 60px  20px 48px 20px;
    width: 100%;
`

export const FooterSocialContainer = styled.div`
    background: ${colors.blueBohemian};
   padding: 40px 40px;

`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
    
`

export const  Copyright = styled.p`
    font-size: 16px;
    font-family: "Steradian";
    font-weight: 400;
    color: #8D5252;
    margin: 0;
    
`

export const FooterNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FooterLink = styled(Link)`
    font-size: 16px;
    font-family: "Steradian";
    font-weight: 400;
    color: ${colors.blueBohemian};
    margin: 0 0 12px 0;
`
export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;

`

export const SocialLink = styled.a`
margin: 0 12px;
`
export const SocialLogoImg = styled.img`
     
`