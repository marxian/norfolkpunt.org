import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Header from '../components/header'

const SiteWrapper = styled.div`
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  z-index: 1;
  position: relative;
`

const Layout = ({ children, data }) => (
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
      <Box w={1}>{children()}</Box>
    </ContentWrapper>
    {true && (
      <Img
        sizes={data.background.sizes}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
    )}
  </SiteWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    background: imageSharp(id: { regex: "/background/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
