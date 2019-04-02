import React from "react"
import styled from "styled-components" 
import { device } from "../../css/devices"
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import { CardContainer, TextContainer, CardTitle
        , Category, Text, LinksContainer, ReadCase,
        ViewSite
} from "./Card.style.js"
import PortfolioImage from "../Images/PortfolioImages.js"


const CardWork = ( props ) => (
    
    <CardContainer>
         <PortfolioImage filename={props.filename} alt={props.alt} sizes={props.sizes}/>

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


