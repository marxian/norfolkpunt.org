import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'

import Layout from '../components/Layout'

export default ({ data }) => {
  const { event } = data
  return (
    <Layout>
      <Flex>
        <Box>
          <h1>{event.frontmatter.title}</h1>
        </Box>
        <Box dangerouslySetInnerHTML={{ __html: event.html }} />
      </Flex>
    </Layout>
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
