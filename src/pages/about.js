import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import "../css/styles.css"
import Helmet from "react-helmet"

import PortfolioImage from "../components/Images/PortfolioImages.js"



import { HeroAbout, SectionPink, Wrapper, AboutTitle, Title, OutlineText, HeroContainer, 
        BigText, SectionAboutMe, StrikeThrough, ContactMe, SubTitle, LinkCont, SubTitleWork,
        Text, SubSubTitle, FlexCenter, SubTitleBig, LinkBlue
} from "../components/StyledComponents/styledComponents.js"
import { TextHeroContainer, WorkContainer,
        ProcessStepsContainer, ProcessContainer, AboutTextContainer, AboutContainer
} from "../components/Pages/Home.style.js"

import { TextAboutContainer, TitleAbout, SubTitleAbout, ParagraphContainerAbout, HeroAboutContainer } from "../components/Pages/About/AboutMe.style.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Joaquin Joya" keywords={[`Product Design`, `UX Design`, `UI Design`]} />
    <Helmet titleTemplate={`About Me | Joaquin Joya`}/>

    <HeroAbout id="Hero">
      <Wrapper>
        
        <HeroAboutContainer>
		<div className="about-hero-mobile">
			<PortfolioImage filename="joaquin-joya-about-me-mobile.jpg" sizes="788" alt="Hey this is me Joaquin Joya"/>	
		</div>
		<div className="about-hero-desktop">
			<PortfolioImage  filename="about-me-portflio-joaquin-joya.jpg" sizes="788" alt="Hey this is me Joaquin Joya"/>
		</div>	
         
		 
          <div>
            <AboutTitle>Hi, I'm<br/> <OutlineText>Joaquin</OutlineText></AboutTitle>
            <BigText>
              I'm an UI/UX Designer and Frontend Developer who loves building and enhancing products for Startups. Based on Mexico City.
            </BigText>
          </div>
          
          
        </HeroAboutContainer>
        

      </Wrapper>
      
    </HeroAbout>
    <SectionAboutMe>
      <Wrapper>
      <TextAboutContainer>
        <TitleAbout>Summary</TitleAbout>
        <BigText>
        A curious, funny and peaceful {`(a little bit crazy)`} dude. I love doing awesome things, Impacting people hearts and minds. Through design I find joy, happines and love.
        </BigText>
      </TextAboutContainer>
      <TextAboutContainer>
        <SubTitleAbout>
		Everything started when I dropped off the university
        </SubTitleAbout>
        <ParagraphContainerAbout>
			<Text>
			I did it for a reason, the love of building, designing and coding interfaces. In 2015 I was studying for being an Industrial Engineering, but it wasn’t what I expected, and it didn’t fulfill me. 
			</Text>
			<Text>
			Before leaving my traditional education behind, I tried to find my passion. Back then a friend of mine showed me an unknown world for me: The Startup Community. I fell in love with the culture and wanted to join in. I started learning Frontend Development, and that lead me to discover my true passion (For now): UX, UI, and Product Design. I found out a world where you could help solve people problems through design. I wanted to use all the time I had to learn it. That’s why I left University and I became a self-taught designer that is improving his craft. 
			</Text>
        </ParagraphContainerAbout>
      </TextAboutContainer>

	  <TextAboutContainer>
        <SubTitleAbout>
		Since then I spend my days
        </SubTitleAbout>
        <ParagraphContainerAbout>
			<Text>
			Helping teams and companies. Improving their products, trying to close the gap between technology and design.
 
			</Text>
			<Text>
			Every day I try to learn something new. Not only about design or code, but everything. I'm very curious and discovering new things about the universe, it's a pleasure.
			</Text>
        </ParagraphContainerAbout>
      </TextAboutContainer>

	  <TextAboutContainer>
        <SubTitleAbout>
			Pushing myself
        </SubTitleAbout>
        <ParagraphContainerAbout>
			<Text>
			After a long time thinking about how to help people, I found out a great way, sharing knowledge. I knew it could be hard, but a great start. That's why I began a blog and a YouTube channel about design and development.


 
			</Text>
			<Text>
			Apart from sharing knowledge, one of my dreams is to help people and animals that need it. I've made little efforts, but they're not enough. I keep trying to think how to do it, but I know I'll do it.
			</Text>
        </ParagraphContainerAbout>
      </TextAboutContainer>

       <TextAboutContainer>
        <SubTitleAbout>
			Beyond Work
        </SubTitleAbout>
        <ParagraphContainerAbout>
			<Text>
				It’s not only about work, but also enjoying life. Time is short and I want to spend it with my family, couple, friends and with everyone that wants a great time.
			</Text>
			<Text>
				I love playing video games, that’s why I created a YouTube channel on Spanish where I can share some of my happiness. You can check it out here if you like! 
			</Text>
        </ParagraphContainerAbout>
      </TextAboutContainer>     
    
	  <TextAboutContainer>
        <SubTitleAbout>
			Remember Me From the Future
        </SubTitleAbout>
        <ParagraphContainerAbout>
			<Text>
			One of my favorite songs, "Remember Me From the Future",  written by Aeiou, had inspired me. I Changed the word "You" to "Me", because I know that in the future we're friends. We only have to remember it.
			</Text>
			
        </ParagraphContainerAbout>
      </TextAboutContainer>  

      </Wrapper>

    </SectionAboutMe>

    
  </Layout>
  
)



export default IndexPage
