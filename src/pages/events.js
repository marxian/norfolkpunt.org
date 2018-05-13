import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import { DateTime } from 'luxon'

export default ({ data }) => (
  <div>
    <Box>
      <h1>Norfolk Punt Calendar</h1>
    </Box>
    {data.events.edges.map(({ event }) => (
      <Box w={1} key={event.fields.slug}>
        <Link to={event.fields.slug}>
          <h2>
            {event.frontmatter.title}
            &mdash;
            {DateTime.fromISO(event.frontmatter.date).toLocaleString(
              DateTime.DATE_MED
            )}
          </h2>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: event.excerpt }} />
      </Box>
    ))}
  </div>
)

export const query = graphql`
  query EventsList {
    events: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "events" } } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        event: node {
          excerpt
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
