import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import "../../css/styles.css" 


export const FooterContainer = styled.div `
    display: flex;
    flex-direction: column;
    
    @media ${device.tablet} {
        
    }

    @media ${device.laptop} {
        display: none;

    
    }
`

export const FooterNavContainer = styled.div `
    background: ${colors.pinkSpecial};  
    
    padding: 60px  0 48px 0;
    

    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;

    
    }

    
`


export const FooterNavWrapper = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        padding: 0 80px;
        
    
    }

    @media ${device.laptop} {
        width: 100%;
        padding: 0;
        

    
    }

`

export const FooterSocialContainer = styled.div`
   background: ${colors.blueBohemian};
   padding: 40px  40px 60px 40px;
   
    @media ${device.laptop} {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
    }

`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;

    @media ${device.tablet} {
        margin:  0;
    }
    
`

export const Copyright = styled.p`
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

    @media ${device.tablet} {
        flex-direction: row;
    }

    @media ${device.laptop} {
        margin: 0 58px 0 0;
    }

      @media ${device.laptopL} {
        margin: 0 144px 0 0;
    }   
    
`

export const FooterLink = styled(Link)`
    font-size: 16px;
    font-family: "Steradian";
    font-weight: 400;
    color: ${colors.blueBohemian};
    margin: 0 0 12px 0;
    
    @media ${device.tablet} {
        margin: 0 8px;
    
    
    }
`
export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;

`

export const SocialLink = styled.a`
    margin: 0 12px;
    line-height: 0;
    @media ${device.laptop} {
        margin: 0 0 0 16px;
    }

`
export const SocialLogoImg = styled.img`
     
`


export const FooterDesktopContainer = styled.div`
    display:none;
    
    @media ${device.laptop} {
        display:grid;
        background: linear-gradient(
        to right, 
        #FCECEC 0%, 
        #FCECEC 70%, 
        #0F2254 30%, 
        #0F2254 100%
  );
        

    
    }
`

export const FooterWrap = styled.div`
    display: grid;
    grid-template-columns: 76% 24%;

`