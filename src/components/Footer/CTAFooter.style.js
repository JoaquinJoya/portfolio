import styled from "styled-components"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import "../../css/styles.css" 

export const Title = styled.h2 `
    font-size: 42px;
    font-family: "Steradian", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 900;
    line-height: 48px;
    color: ${colors.pinkGoldfish};
    margin: 0 0 20px 0;
    @media ${device.laptop} {
        font-size: 60px;
    }
    
`

export const Text = styled.p`
    font-family: "Steradian", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
    font-family: "Steradian", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 24px;
    font-weight: 900;
    text-decoration: underline;
    margin: 0 0 20px 0;
`
