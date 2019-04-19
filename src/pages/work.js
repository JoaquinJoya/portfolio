import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/styles.css"
import Helmet from "react-helmet"
import CardWork from '../components/Work/CardWork.js'

const WorkPage = () => (
    <Layout>
      <SEO title="Joaquin Joya" keywords={[`Product Design`, `UX Design`, `UI Design`]} />
      <Helmet titleTemplate={`Joaquin Joya | Product Designer and Frontend Developer`}/>
      <h1>Perro</h1>
  
      
    </Layout>
    
  )
  
  
  
  export default WorkPage
  