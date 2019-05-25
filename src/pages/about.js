import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/styles.css"
import Helmet from "react-helmet"
import CardWork from '../components/Work/CardWork.js'
import ProcessStep from "../components/Pages/Home/ProcessStep.js"
import PortfolioImage from "../components/Images/PortfolioImages.js"


import { HeroAbout, SectionPink, Wrapper, Title, OutlineText, HeroContainer, 
        BigText, StrikeThrough, ContactMe, SubTitle, LinkCont, SubTitleWork,
        Text, SubSubTitle, FlexCenter, SubTitleBig, LinkBlue
} from "../components/StyledComponents/styledComponents.js"
import { TextHeroContainer, WorkContainer,
        ProcessStepsContainer, ProcessContainer, AboutTextContainer, AboutContainer
} from "../components/Pages/Home.style.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Joaquin Joya" keywords={[`Product Design`, `UX Design`, `UI Design`]} />
    <Helmet titleTemplate={`About Me | Joaquin Joya`}/>

    <HeroAbout id="Hero">
      <Wrapper>
        
        <HeroContainer>
         <PortfolioImage filename="joaquin-joya-about-me-mobile.jpg" sizes="788" alt="Joaquin Joya"/>
         <PortfolioImage filename="joaquinjoya-home.jpg" sizes="788" alt="Joaquin Joya"/>
          <Title>Hi I'm<br/> <OutlineText>Joaquin Joya</OutlineText></Title>
          
        </HeroContainer>
        

      </Wrapper>
      
    </HeroAbout>
    

    
  </Layout>
  
)



export default IndexPage
