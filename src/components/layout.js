import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header/header.js"
import Footer from "./Footer/footer.js"
import "./layout.css"



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        
        <div>
          <main>{children}</main>
          
        </div>
        <Footer/>
      </>
    )}
  />

)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
