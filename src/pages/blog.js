import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/styles.css"
import Helmet from "react-helmet"



import {  Section, CommonHeroTitle, CommonHeroBody ,  Wrapper, SectionSmall } from "../components/StyledComponents/styledComponents.js" 
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post/Post.js'
import {  BlogContainer } from "../components/Pages/Home.style.js"


const BlogPage = () => (
    <Layout>
      <SEO title="Joaquin Joya" keywords={[`Product Design`, `UX Design`, `UI Design`]} />
      <Helmet titleTemplate={`Work | Joaquin Joya`}/>
      <Wrapper>
        <SectionSmall>
          <CommonHeroTitle>What’s on my mind?</CommonHeroTitle>
          <CommonHeroBody>Learn something new about design, development and more!</CommonHeroBody>

        </SectionSmall>
      </Wrapper>
      <Section id="BlogHomeSection">
      <Wrapper>
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
    allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC}) {
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
  
  
  export default BlogPage
  