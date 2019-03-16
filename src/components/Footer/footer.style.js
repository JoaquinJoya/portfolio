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
    padding: 60px 0;
`

export const FooterSocialContainer = styled.div`
    background: ${colors.blueBohemian};
    height: 50px;

`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const  Copyright = styled.p`
    font-size: 16px;
    font-family: "Steradian";
    font-weight: 400;
    color: #8D5252;
    
`