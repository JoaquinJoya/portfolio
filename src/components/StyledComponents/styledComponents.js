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
  padding: 200px 0 140px 0;

  @media ${device.laptopL} {
    padding: 240px 0 240px 0;
  }
`

export const Wrapper = styled.div `
 
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media ${device.mobileL} {
    padding: 0 24px;
    width: 90%;

  }

  @media ${device.tablet} {
    max-width: 90%;
    padding: 0 48px;
  }

  @media ${device.laptopL} {
    max-width: 1316px;
  }

  
  
`;

export  const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`


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

{/*Titles*/}

export const Title = styled.h1`
  font-size: 54px;
  font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: ${colors.blueBohemian};
  line-height: 48px;
  margin-bottom: 20px;

  @media ${device.mobileS} {
    font-size: 40px;
    line-height: 38px;
  }
  
  @media ${device.mobileS} {
    font-size: 48px;
    line-height: 46px;
  }

  @media ${device.mobileL} {
    font-size: 48px;
    line-height: 46px;
  }

  @media ${device.tablet} {
    font-size: 60px;
    line-height: 56px;
  }

  @media ${device.laptopL} {
    font-size: 105px;
    line-height: 94px;
  }

`

export const SubTitle = styled.h2`
  font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
  font-weight: 900;
  color: ${colors.blueBohemian};
  text-transform: uppercase;
  letter-spacing: -0.02em;
  font-size: 44px;
  text-transform: none;
  line-height: 72px;
  margin: 0 0 8px 0;

  @media ${device.laptopL} {
    font-size: 80px;
    margin: 0 0 48px 0;

    }


`

export const SubTitleBig = styled(SubTitle)`
  font-size: 32px;
  line-height: 34px;
  margin: 40px 0 24px 0;
  @media ${device.laptopL} {
    font-size: 40px;
    line-height: 48px;
    margin: 0px 0 32px 0;

    }
`



export const SubTitleWork = styled(SubTitle)`
  margin: -87px 0 60px 0;
  text-align: center;

  @media ${device.mobileS} {
    font-size: 36px;
    margin: -86px 0 16px 0;
  }

  @media ${device.tablet} {
    font-size: 44px;
    text-align: right;
    margin: -90px 0 40px 0;

    }
  @media ${device.laptopL} {
    font-size: 80px;
    margin: -91px 0 90px 0;
    text-align: right;

    }


`

export const SubSubTitle = styled.h3`
  font-size: 24px;
  text-transform: none;
  font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
  font-weight: 900;
  color: ${colors.blueBohemian};
  line-height: 32px;
  margin: 0 0 8px 0;
`

export const OutlineText = styled.span`
  -webkit-text-stroke-width: 1.5px;
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

export const Text = styled(BigText)`
  @media ${device.laptopL} {
          font-size: 18px;
          line-height: 30px;

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

export const LinkCont = styled(Link) `
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    font-family: "Steradian", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-decoration: underline;
    margin-top: -30px;
    color: ${colors.blueDark};
    @media ${device.laptop} {
        font-size: 27px;
        }

`
export const LinkBlue = styled(LinkCont) `
  margin: 20px 0 0 0;
  color: ${colors.liberame};

  @media ${device.laptop} {
        font-size: 18px;
        }
`
