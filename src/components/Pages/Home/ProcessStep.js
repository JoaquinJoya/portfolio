import React from "react"
import { ProcessTextContainer, Step } from "../Home.style.js"
import { SubSubTitle, Text} from "../../StyledComponents/styledComponents.js"


const ProcessStep = ( props ) => (
    <ProcessTextContainer>
        <Step>{props.step}</Step>
        <SubSubTitle>{props.title}</SubSubTitle>
        <Text>{props.text}</Text>

    </ProcessTextContainer>

)

export default ProcessStep