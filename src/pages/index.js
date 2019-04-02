import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/styles.css"
import Helmet from "react-helmet"
import Img from 'gatsby-image'
import CardWork from '../components/Work/CardWork.js'
import PortfolioImage from "../components/Images/PortfolioImages.js"

import { Section, SectionPink, Wrapper, Title, OutlineText, HeroContainer, 
        BigText, StrikeThrough, ContactMe, SubTitle
} from "../components/StyledComponents/styledComponents.js"
import { TextHeroContainer} from "../components/Pages/Home.style.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Joaquin Joya" keywords={[`Product Design`, `UX Design`, `UI Design`]} />
    <Helmet titleTemplate={`Joaquin Joya | Product Designer and Frontend Developer`}/>

    <SectionPink id="Hero">
      <Wrapper>
        <HeroContainer>
          <Title>Remember Me From <br/> <OutlineText>The Future</OutlineText></Title>
            <TextHeroContainer>
                <BigText>
                  Hello there, I’m Joaquin Joya an <StrikeThrough>UX Engineer</StrikeThrough> 
                  <b> Product/Web Designer &amp; Frontend Developer </b>
                  based on Mexico City, enthusiastic to build and enhance products for people.
                </BigText>
                <ContactMe href="mailto:contact@joaquinjoyareal.com">Contact Me</ContactMe>
            </TextHeroContainer>
        </HeroContainer>
        

        
      </Wrapper>
      
    </SectionPink>
    <Section>
      <Wrapper>
            <SubTitle work>Selected Work</SubTitle>
            <CardWork 
              alt="Coming Soon" filename="coming-soon-1.png" 
              category="Product Design / UX / UI"
              title="Projects Coming Soon 1"
              tagline="Uplead is a lead generation platform that connects you to the right contacts"
              case="/" web="https://www.instagram.com/joaquinjoyareal/"
            />
            <CardWork 
              alt="Coming Soon" filename="coming-soon-2.png" 
              category="Product Design / UX / UI"
              title="Projects Coming Soon 2"
              tagline="Uplead is a lead generation platform that connects you to the right contacts"
              case="/" web="https://www.instagram.com/joaquinjoyareal/"
            />
            <CardWork 
              alt="Coming Soon" filename="coming-soon-3.png" 
              category="Product Design / UX / UI"
              title="Projects Coming Soon 3"
              tagline="Uplead is a lead generation platform that connects you to the right contacts"
              case="/" web="https://www.instagram.com/joaquinjoyareal/"
            />
            
            
            
      </Wrapper>

    </Section>


    <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  
)



export default IndexPage
