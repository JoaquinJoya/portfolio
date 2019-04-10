import styled from "styled-components" 
import { device } from "../../css/devices"
import { Text } from "../StyledComponents/styledComponents.js"
import colors from "../../css/colors.js"


export const TextHeroContainer = styled.div`
    align-self: center;
    justify-self: center;
`

export const WorkContainer = styled.div`
    @media ${device.mobileL} {
        display: grid;
        

    }
`

export const ProcessContainer = styled.div`
     @media ${device.laptop} {
        display: grid;
        grid-template-columns: 38% 62%;
        column-gap: 80px;
        
    }
     
`

export const ProcessStepsContainer = styled.div`
    display: grid;
    @media ${device.tablet}{
        grid-template-columns: 1fr 1fr;
        column-gap: 32px;
    }
    @media ${device.laptop} {
        grid-template-columns: 1fr 1fr;
        column-gap: 32px;
    }
`

export const ProcessTextContainer = styled.div`
    margin: 0 0 40px 0;
`

export const Step = styled(Text)`
    color:${colors.nada};
    font-weight: 900;
    line-height: 1;
    margin: 0 0 6px 0;
`
