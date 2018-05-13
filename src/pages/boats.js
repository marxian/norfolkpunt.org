import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  padding: 0.5em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-in-out;
  :hover {
    transform: scale(1.02);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 5;
  }
`

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

const BoatLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

const Boat = ({ boat, imageWanted }) => (
  <Box w={[1 / 2, 1 / 3, 1 / 3, 1 / 5]} p={1}>
    <Card>
      <BoatLink to={boat.fields.slug}>
        <Figure>
          <Img sizes={boat.mugshot ? boat.mugshot.sizes : imageWanted.sizes} />
          <FigCaption>
            {boat.frontmatter.name} ~{' '}
            <SailNo>{boat.frontmatter.sailNumber}</SailNo>
          </FigCaption>
        </Figure>
      </BoatLink>
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
