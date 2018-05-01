import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
  <div>
    <h1>Norfolk Punt Register</h1>
    <ul>
      {data.boats.edges.map(({ boat }) => (
        <li key={boat.fields.slug}>
          <Link to={boat.fields.slug}>
            {boat.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query BoatsList {
    boats: allBoatsJson {
      edges {
        boat: node {
          name
          sailNumber
          fields {
            slug
          }
        }
      }
    }
  }
`
