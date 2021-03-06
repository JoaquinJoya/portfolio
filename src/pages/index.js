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
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post/Post.js'

import { Section, SectionPink, Wrapper, Title, OutlineText, HeroContainer, 
        BigText, StrikeThrough, ContactMe, SubTitle, LinkCont, SubTitleWork,
        Text, SubSubTitle, FlexCenter, SubTitleBig, LinkBlue
} from "../components/StyledComponents/styledComponents.js"
import { TextHeroContainer, WorkContainer,
        ProcessStepsContainer, ProcessContainer, AboutTextContainer, AboutContainer, BlogContainer
} from "../components/Pages/Home.style.js"

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
          <SubTitleWork>Selected Work</SubTitleWork>
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
          <FlexCenter>
           <LinkCont to="/work">View More Work</LinkCont>
          </FlexCenter>
          
            
            
      </Wrapper>

    </Section>
    <Section id="ProcessSection">
      <Wrapper>
      <ProcessContainer>
        <div>
        <SubTitle>
            The Process
          </SubTitle>
          <BigText  className="ProcessText">
            Achieving your business goals, and improving the experience is the most important thing for me. 
            I’ll take care of you and your customer needs, to create a design that fits your goals.
          </BigText>
        </div>
          <ProcessStepsContainer>
            <ProcessStep
              step="01"
              title="Research"
              text="I'll start by asking you a few questions about your business needs and goals. After setting the right objectives, I’ll do a complete research about your business. 
              Then I'll analyze potential solutions and ."
            />

            <ProcessStep
              step="02"
              title="Design"
              text="Once I've found the closest solution. I'll start by iterating until 
              the design accomplishes your user and business goals. In the end, you will have an appealing interface or landing page that works."
            />
            <ProcessStep
              step="03"
              title="Development"
              text="If you need it, I'll be able to help you with the frontend development. 
              Collaborating with your team, or doing it all by myself. At the end you'll have a fully optimized website."
            />
            <ProcessStep
              step="04"
              title="Delivering"
              text="Before delivering to you, I’ll 
              ensure that everything is perfect. If you like, I'll be glad to test the design with your users. 
              Based on the results, I'll iterate and improve what's needed."
            />
          </ProcessStepsContainer>
      </ProcessContainer>
        
    
      </Wrapper>
    </Section>


    <Section id="AboutMeSection">
      <Wrapper>
      <AboutContainer>
        <PortfolioImage filename="joaquinjoya-home.jpg" sizes="788" alt="Joaquin Joya"/>
          <AboutTextContainer>
            <SubTitleBig>
              Is this the real life? Is this just a fantasy?
            </SubTitleBig>
            <Text>
              From Mexico City, I spend my days working on UX/UI, as well as Frontend Development and Product Design. 
              After working in my Full-Time Job, I love doing some freelance work with amazing people. During my free time I enjoy learning new things, 
              not only about design or code, but whatever could be interesting and fun.
            </Text>
            <LinkBlue to="/about">Read more about me</LinkBlue>
          </AboutTextContainer>
      </AboutContainer>
        
        
      </Wrapper>
    </Section>
    <Section id="BlogHomeSection">
      <Wrapper>
      <SubTitle>
            Blog
          </SubTitle>
        <StaticQuery query={indexQuery} render={data => {
          return (
            <BlogContainer>
            
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                title={node.frontmatter.title}
                body={node.excerpt}
                path={node.frontmatter.path}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                
                />
              ))}
            </BlogContainer>
          )
        }}/>
      </Wrapper>
    </Section>
    
  </Layout>
  
)

const indexQuery = graphql`
  query{
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC}) {
      edges{
        node{
          id
          frontmatter {
            title
            date
            author
            path
            image{
              childImageSharp{
                fluid(maxWidth: 670){
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength:110)
        }
      }
    }
  }
`

export default IndexPage
