import React from 'react'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import { DateTime } from 'luxon'
import Card from '../components/Card'
import SubtleLink from '../components/SubtleLink'

export default ({ data }) => (
  <div>
    {data.events.edges.map(({ event }) => (
      <Box m={3} key={event.fields.slug}>
        <Card>
          <SubtleLink to={event.fields.slug}>
            <h2>
              {event.frontmatter.title}
              &mdash;
              {DateTime.fromISO(event.frontmatter.date).toLocaleString(
                DateTime.DATE_MED
              )}
            </h2>
          </SubtleLink>
          <div dangerouslySetInnerHTML={{ __html: event.excerpt }} />
        </Card>
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
