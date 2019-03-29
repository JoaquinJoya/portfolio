
import styled from "styled-components" 
import { device } from "../../css/devices"
import colors from "../../css/colors.js"

import { Link } from "gatsby"


export const CardContainer = styled.div`


`

export const TextContainer = styled.div `

`
export const CardTitle = styled.h3`
    font-size: 24px;
    font-family: "Steradian", "sans-serif";
    font-weight: 900;
    color: ${colors.blueBohemian};
    line-height: 1.25em;
    margin: 0 0 14px 0;

    
`

export const Text = styled.p`
    font-size: 18px;
    font-family: "Steradian", "sans-serif";
    font-weight: 400;
    color: ${colors.blueOnix};
    line-height: 27px;
    margin: 0 0 24px 0;
`

export const Category = styled.span`
    font-size: 14px;
    font-family: "Steradian", "sans-serif";
    font-weight: 500;
    color: ${colors.nada};
    line-height: 1.25em;
    margin: 24px 0 8px 0;
    display: inline-block;
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

export const ViewSite = styled(ReadCase)`
    font-weight: 400;
    color: ${colors.nada};

`