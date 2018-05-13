import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'

export default ({ data }) => (
  <div>
    <Box>
      <h1>Norfolk Punt Register</h1>
    </Box>
    <Flex>
      {data.boats.edges.map(({ boat }) => (
        <Box w={[1 / 2, 1 / 3, 1 / 3, 1 / 5]} key={boat.fields.slug}>
          <Link to={boat.fields.slug}>
            {boat.mugshot && <Img sizes={boat.mugshot.sizes} />}
            {boat.name} &mdash; {boat.sailNumber}
          </Link>
        </Box>
      ))}
    </Flex>
  </div>
)

export const query = graphql`
  query BoatsList {
    boats: allBoatsJson(sort: { order: DESC, fields: [sailNumber] }) {
      edges {
        boat: node {
          name
          sailNumber
          fields {
            slug
          }
          mugshot {
            sizes(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
