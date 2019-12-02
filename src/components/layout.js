/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          nab
        }
      }
    }
  `)

  return (
    <Fragment>
      <div id="wrapper">
        
          <Header siteTitle={data.site.siteMetadata.nab} />
       
        <main id="main">
          {children}
        </main>
      </div>
      <footer id="footer">
        © {new Date().getFullYear()},
        {` `}
        <a href="http://www.yonedesign.com">YoneDesign</a>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
