import styled from "styled-components" 
import { device } from "../../css/devices"


export const TextHeroContainer = styled.div`
    align-self: center;
    justify-self: center;
`

export const WorkContainer = styled.div`
    @media ${device.mobileL} {
        display: grid;
        

    }
`

export  const ViewMoreContainer = styled.div`
    display: flex;
    justify-content: center;
`