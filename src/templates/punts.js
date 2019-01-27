import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'

import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

export default ({ data }) => {
  const { boat, pictures } = data

  let gallery = []
  if (boat.mugshot) {
    gallery.push({ picture: boat.mugshot })
  }
  if (pictures) {
    gallery = gallery.concat(pictures.edges)
  }

  return (
    <Layout>
      <Box w={[1, 1 / 2]}>
        <h1>{boat.frontmatter.name}</h1>
        <p>Some text about the boat I guess</p>
      </Box>
      <Box w={[1, 1 / 2]}>
        <Gallery pictures={gallery} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BoatDetailsQuery($slug: String!) {
    boat: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
      }
      mugshot {
        fluid(maxWidth: 600, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
        original {
          src
        }
      }
    }

    pictures: allImageSharp(filter: { fields: { boats: { in: [$slug] } } }) {
      edges {
        picture: node {
          id
          fluid(maxWidth: 600, maxHeight: 600, cropFocus: CENTER) {
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
