import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'grid-styled'
import { DateTime } from 'luxon'

import Layout from '../components/Layout'
import Card from '../components/Card'
import SubtleLink from '../components/SubtleLink'

export default ({ data }) => (
  <Layout>
    <div>
      {data.events.edges.map(({ event }) => (
        <Box m={3} key={event.fields.slug}>
          <Card>
            <SubtleLink to={`/events/${event.fields.slug}`}>
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
  </Layout>
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
