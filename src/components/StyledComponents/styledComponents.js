import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"



export const Section = styled.section`
 background: ${props => props.blue ? "#0F2254": "#fff"};
 padding: 48px 0;
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


export const LogoContainer = styled(Link)`
  height: 100%;
`;