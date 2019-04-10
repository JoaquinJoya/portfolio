import React from "react"
import { CardContainer, TextContainer, CardTitle
        , Category, Text, LinksContainer, ReadCase,
        ViewSite, ImageContainer
} from "./Card.style.js"
import PortfolioImage from "../Images/PortfolioImages.js"


const CardWork = ( props ) => (
    
    <CardContainer>
        <ImageContainer>
            <PortfolioImage ClassName="PortfolioImage" filename={props.filename} alt={props.alt} sizes={props.sizes}/>
        </ImageContainer>
        <TextContainer>
            <Category>{props.category}</Category>
            <CardTitle>{props.title}</CardTitle>
            <Text> {props.tagline}</Text>
            <LinksContainer>
                <ReadCase to={props.case}>Read Case Study </ReadCase>
                <ViewSite href={props.web}>View Site </ViewSite>
            </LinksContainer>
        </TextContainer>
       
    </CardContainer>
    
    
  )



export default CardWork


