import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/styles.css"
import Helmet from "react-helmet"
import CardWork from '../components/Work/CardWork.js'
import { CommonHeroTitle, CommonHeroBody ,  Wrapper, SectionSmall } from "../components/StyledComponents/styledComponents.js" 
import {WorkContainer} from "../components/Pages/Home.style.js"

const WorkPage = () => (
    <Layout>
      <SEO title="Joaquin Joya" keywords={[`Product Design`, `UX Design`, `UI Design`]} />
      <Helmet titleTemplate={`Joaquin Joya | Product Designer and Frontend Developer`}/>
      <Wrapper>
        <SectionSmall>
          <CommonHeroTitle>Select Work</CommonHeroTitle>
          <CommonHeroBody>See what have I done in the past, present and future!</CommonHeroBody>

        </SectionSmall>
        <WorkContainer>
         
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
              <CardWork 
                alt="Coming Soon" filename="coming-soon-3.png" 
                category="Product Design / UX / UI"
                title="Projects Coming Soon 4"
                tagline="Uplead is a lead generation platform that connects you to the right contacts"
                case="/" web="https://www.instagram.com/joaquinjoyareal/"
              />
              
              
          </WorkContainer>
      </Wrapper>
      

  
  
      
    </Layout>
    
  )
  
  
  
  export default WorkPage
  