import React from "react"
import styled from "styled-components"
import colors from "../../../css/colors.js"
import { device } from "../../../css/devices.js"


export const TextAboutContainer = styled.div`
    display: grid;
    align-self: center;
    justify-self: center;
    margin: 0 0 48px 0;

    @media ${device.tablet} {
        grid-template-columns: 50% 50%;
        grid-gap: 60px;
        justify-content: center;
    }

    @media ${device.laptop} {
        grid-template-columns: 31% 40%;
        grid-gap: 140px;
        justify-content: center;
    }

` 

export const ParagraphContainerAbout = styled.div`


`

export const HeroAboutContainer = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr;
      grid-gap: 32px;
    }

    @media ${device.laptopL} {
      grid-template-columns: 51% 49%;
      grid-gap: 80px;
    }
  `

export const TitleAbout = styled.h2`
  font-size: 27px;
  font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
  font-weight: 900;
  color: ${colors.blueBohemian};
  margin: 0 0 20px 0;

  @media ${device.tablet} {
    font-size: 40px;
  }
`

export const SubTitleAbout = styled.h3`
    font-size: 22px;
    line-height: 1.25;
    font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
    font-weight: 500;
    color: ${colors.blueDark};
    margin: 0 0 20px 0;

    @media ${device.tablet} {
        font-size: 27px;
    }
`