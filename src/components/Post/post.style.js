import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../../css/colors.js"
import { device } from "../../css/devices.js"

export const CardPost = styled.div`
    padding: 48px 24px;
    @media ${device.laptopL}{
        padding: 56px 32px;
    }
`;

export const CardPostTitle = styled.h3`
    font-size: 18px;
   
    font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
    font-weight: 900;
    color: ${colors.blueLA};
    line-height: 22.5px;
    margin: 0 0 14px 0;
    
`;

export const CardPostText = styled.p`
    font-size: 18px;
   
    font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
    font-weight: 400;
    color: ${colors.blueBohemian};
    line-height: 27px;
    margin: 0 0 14px 0;
    
`;

export const CardPostLink = styled(Link)`
    
`;

export const CardPostReadMore = styled.span`
    font-size: 16px;
   font-family: "Steradian", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
       Ubuntu, Cantarell, Fira Sans, Helvetica, sans-serif;
   font-weight: 900;
   color: ${colors.blueLA};
   line-height: 1;
   margin: 0 8px 32px 0;
`;

export const CardPostArrow = styled.img`
    width: 16px;
`

export const CardPostTextContainer = styled.div`
    margin: 0 0 40px 0;
    @media ${device.laptop} {
        height: 240px;
        margin: 0 0 40px 0;
    }
    @media ${device.laptopL} {
        margin: 0 0 20px 0;
        height: 240px;
    }
    

`