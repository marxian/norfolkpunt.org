import React from 'react'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import { html } from 'common-tags'

export default ({ data }) => {
  const { event } = data
  return (
    <Flex>
      <Box>
        <h1>{event.frontmatter.title}</h1>
      </Box>
      <Box dangerouslySetInnerHTML={{ __html: event.html }} />
    </Flex>
  )
}

export const query = graphql`
  query EventQuery($slug: String!) {
    event: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
