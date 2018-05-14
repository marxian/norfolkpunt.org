import React from 'react'
import { Flex, Box } from 'grid-styled'

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
    <Flex>
      <Box w={[1, 1 / 2]}>
        <h1>{boat.frontmatter.name}</h1>
        <p>Some text about the boat I guess</p>
      </Box>
      <Box w={[1, 1 / 2]}>
        <Gallery pictures={gallery} />
      </Box>
    </Flex>
  )
}

export const query = graphql`
  query BoatDetailsQuery($slug: String!) {
    boat: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
      }
      mugshot {
        sizes(maxWidth: 600, maxHeight: 600, cropFocus: CENTER) {
          ...GatsbyImageSharpSizes_tracedSVG
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
          sizes(maxWidth: 600, maxHeight: 600, cropFocus: CENTER) {
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
