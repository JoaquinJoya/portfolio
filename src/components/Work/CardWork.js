import React from "react"
import styled from "styled-components" 
import { device } from "../../css/devices"
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import { CardContainer, TextContainer, CardTitle
        , Category, Text, LinksContainer, ReadCase,
        ViewSite
} from "./Card.style.js"


const CardWork = () => (
    
    <CardContainer>
         <StaticQuery
        query={graphql`
            query {
            placeholderImage: file(relativePath: { eq: "coming-soon-1.png" }) {
                childImageSharp {
                fluid(maxWidth: 3000) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            }
        `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
         />

        <TextContainer>
            <Category>Product Design / UX / UI</Category>
            <CardTitle>Projects Coming Soon</CardTitle>
            <Text> Uplead is a lead generation platform that connects you to the right contacts</Text>
            <LinksContainer>
                <ReadCase to="/">Read Case Study</ReadCase>
                <ViewSite href="#">View Site</ViewSite>
            </LinksContainer>
        </TextContainer>
       
    </CardContainer>
    
    
  )



export default CardWork


