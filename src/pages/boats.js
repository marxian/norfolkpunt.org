import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Card from '../components/Card'
import SubtleLink from '../components/SubtleLink'

const Figure = styled.figure`
  margin: 0px;
`

const FigCaption = styled.figcaption`
  color: black;
  text-align: center;
  vertical-align: middle;
`

const SailNo = styled.span`
  font-size: large;
`

const Boat = ({ boat, imageWanted }) => (
  <Box w={[1 / 2, 1 / 3, 1 / 3, 1 / 5]} p={1}>
    <Card>
      <SubtleLink to={boat.fields.slug}>
        <Figure>
          <Img sizes={boat.mugshot ? boat.mugshot.sizes : imageWanted.sizes} />
          <FigCaption>
            {boat.frontmatter.name} ~{' '}
            <SailNo>{boat.frontmatter.sailNumber}</SailNo>
          </FigCaption>
        </Figure>
      </SubtleLink>
    </Card>
  </Box>
)

export default ({ data }) => (
  <div>
    <Flex flexWrap="wrap">
      {data.boats.edges.map(({ boat }) => (
        <Boat
          boat={boat}
          key={boat.fields.slug}
          imageWanted={data.imageWanted}
        />
      ))}
    </Flex>
  </div>
)

export const query = graphql`
  query BoatsList {
    boats: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "boats" } } }
      sort: { order: DESC, fields: [frontmatter___sailNumber] }
    ) {
      edges {
        boat: node {
          frontmatter {
            name
            sailNumber
          }
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
    imageWanted: imageSharp(id: { regex: "/image-wanted/" }) {
      sizes(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`
