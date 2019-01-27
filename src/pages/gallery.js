import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

export default ({ data }) => (
  <Layout>
    <Gallery pictures={data.pictures.edges} />
  </Layout>
)

export const query = graphql`
  query GalleryPictures {
    pictures: allImageSharp(
      sort: { order: DESC, fields: [fields___interest] }
      filter: { fields: { interest: { ne: -1 } } }
    ) {
      edges {
        picture: node {
          id
          fluid(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
          original {
            src
          }
        }
      }
    }
  }
`
