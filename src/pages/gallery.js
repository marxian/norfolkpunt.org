import React from 'react'
import Gallery from '../components/Gallery'

export default ({ data }) => <Gallery pictures={data.pictures.edges} />

export const query = graphql`
  query GalleryPictures {
    pictures: allImageSharp(
      sort: { order: DESC, fields: [fields___interest] }
      filter: { fields: { interest: { ne: -1 } } }
    ) {
      edges {
        picture: node {
          id
          sizes(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
          original {
            src
          }
        }
      }
    }
  }
`
