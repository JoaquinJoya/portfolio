import styled from "styled-components"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import "../../css/styles.css" 

export const Title = styled.h2 `
    font-size: 36px;
    font-weight: 900;
    line-height: 40.5px;
    color: ${colors.pinkGoldfish};
    margin: 0 0 20px 0;
    
`

export const Text = styled.p`
    font-family: "Steradian";
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #fff;

`
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0 0 0;
`

export const ContactButton = styled.a`
    color: #fff;
    font-family: "Steradian";
    font-size: 27px;
    font-weight: 900;
    text-decoration: underline;
    margin: 0 0 20px 0;
`
