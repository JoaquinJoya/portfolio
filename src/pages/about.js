import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import "../css/styles.css"
import Helmet from "react-helmet"

import PortfolioImage from "../components/Images/PortfolioImages.js"


import AboutMeText from "../components/Pages/About/AboutMeText.js"

import { HeroAbout, SectionPink, Wrapper, AboutTitle, Title, OutlineText, HeroContainer, 
        BigText, SectionAboutMe, StrikeThrough, ContactMe, SubTitle, LinkCont, SubTitleWork,
        Text, SubSubTitle, FlexCenter, SubTitleBig, LinkBlue
} from "../components/StyledComponents/styledComponents.js"
import { TextHeroContainer, WorkContainer,
        ProcessStepsContainer, ProcessContainer, AboutTextContainer, AboutContainer
} from "../components/Pages/Home.style.js"

import { TextAboutContainer, TitleAbout } from "../components/Pages/About/BiographyText.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Joaquin Joya" keywords={[`Product Design`, `UX Design`, `UI Design`]} />
    <Helmet titleTemplate={`About Me | Joaquin Joya`}/>

    <HeroAbout id="Hero">
      <Wrapper>
        
        <HeroContainer>
         <PortfolioImage filename="joaquin-joya-about-me-mobile.jpg" sizes="788" alt="Hey this is me Joaquin Joya"/>
          <div>
            <AboutTitle>Hi, I'm<br/> <OutlineText>Joaquin Joya</OutlineText></AboutTitle>
            <BigText>
              I'm an UI/UX Designer and Frontend Developer who loves building and enhancing products for Startups. Based on Mexico City.
            </BigText>
          </div>
          
          
        </HeroContainer>
        

      </Wrapper>
      
    </HeroAbout>
    <SectionAboutMe>
      <Wrapper>
      <TextAboutContainer>
        <TitleAbout>Summary</TitleAbout>
        <BigText>
        A curious, funny and peaceful (a little bit crazy) dude. I love doing awesome things, Impacting people hearts and minds. Through design I find joy, happines and love.
        </BigText>
      </TextAboutContainer>
      <AboutMeText
      
      title="Everything started when I dropped off the university"
      text={["I did it for a reason, ", <strong>the love of building, designing and coding interfaces</strong>,  
      ". In 2015 I was studying for being an Industrial Engineering, but it wasn’t what I expected, and it didn’t fulfill me. "]}
      
      >
      
        
      </AboutMeText>
          
            
            
      </Wrapper>

    </SectionAboutMe>

    
  </Layout>
  
)



export default IndexPage
