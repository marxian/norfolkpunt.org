import React from 'react'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'

export default ({ data }) => {
  const { boat, mugshot, images } = data
  return (
    <Flex>
      <Box w={1 / 2}>
        <h1>{boat.name}</h1>
        <p>Some text about the boat I guess</p>
      </Box>
      {mugshot ? (
        <Box w={1 / 2} px={1}>
          <Img sizes={mugshot.sizes} />
        </Box>
      ) : null}
      {images ? (
        <Box w={1 / 2} px={1}>
          {images.edges.map(({ image }) => <Img sizes={image.sizes} />)}
        </Box>
      ) : null}
    </Flex>
  )
}

export const query = graphql`
  query BoatDetailsQuery($slug: String!) {
    boat: boatsJson(fields: { slug: { eq: $slug } }) {
      name
      mugshot {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
        original {
          src
        }
      }
    }

    images: allImageSharp(filter: { fields: { boats: { in: [$slug] } } }) {
      edges {
        image: node {
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
