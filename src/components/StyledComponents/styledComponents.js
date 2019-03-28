import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"



export const Section = styled.section`
 background: ${props => props.blue ? "#0F2254": "#fff"};
 padding: 48px 0;
`

export const SectionPink = styled(Section)`
  background: ${colors.pinkSpecial};
  padding: 130px 0 100px 0;
  @media ${device.laptopL} {
    padding: 200px 0 190px 0;
  }
`

export const Wrapper = styled.div `
 
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;


  @media ${device.tablet} {
    max-width: 90%;
    padding: 0 80px;
  }

  @media ${device.laptopL} {
    max-width: 1316px;
  }

  
  
`;


{/*Containers*/}

export const HeroContainer = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;

    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr;
      grid-gap: 32px;
    }

    @media ${device.laptopL} {
      grid-template-columns: 54% 46%;
      grid-gap: 100px;
    }
  
`

export const LogoContainer = styled(Link)`
  height: 100%;
`;

{/*Title*/}

export const Title = styled.h1`
  font-size: 40px;
  font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: ${colors.blueBohemian};
  line-height: 36px;

  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 60px;
    line-height: 56px;
  }

  @media ${device.laptopL} {
    font-size: 105px;
    line-height: 94px;
  }

`

export const OutlineText = styled.span`
  -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${colors.blueBohemian};
    color: transparent;

    @media ${device.tablet} {
    -webkit-text-stroke-width: 2px;
  }

  @media ${device.laptopL} {
    -webkit-text-stroke-width: 2px;
  }
`

export const BigText = styled.p`
  font-size: 18px;
  font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
  font-weight: 400;
  color: ${colors.blueBohemian};
  line-height: 30px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 30px;
  }

    @media ${device.laptopL} {
        font-size: 27px;
        line-height: 40px;

    }
`

export const StrikeThrough = styled.span`
  color: #8590AB;
  text-decoration: line-through;
`
export const ContactMe = styled.a`
    font-size: 18px;
    font-family: "Steradian";
    font-weight: 900;
    color: ${colors.blueBohemian};
    line-height: 27px;
    text-decoration: underline;

    @media ${device.tablet} {
    font-size: 18px;
    font-family: "Steradian";
    font-weight: 900;
  }

    @media ${device.laptopL} {
        font-size: 27px;
        

    }
`