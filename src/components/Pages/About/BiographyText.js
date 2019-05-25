import React from "react"
import styled from "styled-components"
import colors from "../../../css/colors.js"
import { device } from "../../../css/devices.js"


export const TextAboutContainer = styled.div`
    display: grid;
    align-self: center;
    justify-self: center;
    margin: 0 0 48px 0;

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