import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Box } from 'grid-styled'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Header from '../components/Header'

const SiteWrapper = styled.div`
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  z-index: 1;
  position: relative;
`

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
        background: file(relativePath: { regex: "/background.jpg$/" }) {
          sharp: childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <SiteWrapper>
        <Helmet
          title={`${data.site.siteMetadata.title} ${
            data.site.siteMetadata.subtitle
          }`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <ContentWrapper>
          <Header {...data.site.siteMetadata} />
          <Box w={1}>{children}</Box>
        </ContentWrapper>
        <Img
          fluid={data.background.sharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </SiteWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
