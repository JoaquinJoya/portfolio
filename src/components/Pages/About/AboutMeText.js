import React from "react"
import { TextAboutContainer, SubTitleAbout} from "./BiographyText.js"
import { Text } from "../../../components/StyledComponents/styledComponents.js"

const AboutMeText = ( props ) => (
    <TextAboutContainer>
        <SubTitleAbout>{props.title}</SubTitleAbout>
        <Text>{props.text}</Text>
        <Text>{props.SecondP}</Text>
    </TextAboutContainer>

)

export default AboutMeText