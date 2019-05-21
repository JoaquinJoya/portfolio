
import styled from "styled-components" 
import { device } from "../../css/devices"
import colors from "../../css/colors.js"

import { Link } from "gatsby"


export const CardContainer = styled.div`
    padding: 0 0 48px 0;
    border-bottom: 1px solid #e6eaf1;
    margin: 0 0 64px 0;

    @media ${device.laptop} {
        display: grid;
        align-items: center;
        grid-template-columns: 34% 64%;
        grid-gap: 27px;
        

    }
   

`

export const TextContainer = styled.div `

    @media ${device.laptop} {
            order: 1;
        }
`
export const CardTitle = styled.h3`
    font-size: 24px;
    font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
    font-weight: 900;
    color: ${colors.blueBohemian};
    line-height: 1.25em;
    margin: 0 0 14px 0;

    @media ${device.mobileS} {
        font-size: 22px;
    }

    
`

export const Text = styled.p`
    font-size: 18px;
    font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
    font-weight: 400;
    color: ${colors.blueOnix};
    line-height: 27px;
    margin: 0 0 48px 0;
    
`

export const Category = styled.span`
    font-size: 14px;
    font-family: "Steradian", "sans-serif";
    font-weight: 500;
    color: ${colors.nada};
    line-height: 1.25em;
    margin: 24px 0 8px 0;
    display: inline-block;

    @media ${device.laptop} {
        margin: 0px 0 8px 0;
        

    }
`

export const LinksContainer = styled.div`
    display:flex;
    justify-content: space-between;

`
export const ReadCase = styled(Link)`
    font-size: 18px;
    font-family: "Steradian", "sans-serif";
    font-weight: 900;
    color: ${colors.liberame};
    text-decoration: underline;

`

export const ViewSite = styled.a`
    font-size: 18px;
    font-family: "Steradian", "sans-serif";
    font-weight: 400;
    color: ${colors.nada};
    text-decoration: underline;

`

export const ImageContainer = styled.div`
    @media ${device.laptop} {
        order: 2;
    }
`