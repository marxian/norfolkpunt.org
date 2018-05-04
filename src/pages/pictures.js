import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import styled from 'styled-components'

import 'react-image-lightbox/style.css'

const FocusTrigger = styled.div`
  cursor: pointer;
`

export default class Pictures extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusIndex: null,
    }
  }

  render() {
    const { focusIndex } = this.state
    const pictures = this.props.data.pictures.edges
    return (
      <Flex flexWrap="wrap">
        {pictures.map(({ picture }, i) => (
          <Box w={[1, 1 / 2, 1 / 3, 1 / 5]} px={1} key={picture.id}>
            <FocusTrigger
              role="button"
              onClick={() => this.setState({ focusIndex: i })}
            >
              <Img sizes={picture.sizes} />
            </FocusTrigger>
          </Box>
        ))}
        {focusIndex !== null && (
          <Lightbox
            mainSrc={pictures[focusIndex].picture.original.src}
            nextSrc={
              pictures[(focusIndex + 1) % pictures.length].picture.original.src
            }
            prevSrc={
              pictures[(focusIndex + pictures.length - 1) % pictures.length]
                .picture.original.src
            }
            onMovePrevRequest={() =>
              this.setState({
                focusIndex:
                  (focusIndex + pictures.length - 1) % pictures.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                focusIndex: (focusIndex + 1) % pictures.length,
              })
            }
            onCloseRequest={() => this.setState({ focusIndex: null })}
          />
        )}
      </Flex>
    )
  }
}

export const query = graphql`
  query AllPictures {
    pictures: allImageSharp {
      edges {
        picture: node {
          id
          sizes(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
            ...GatsbyImageSharpSizes
          }
          original {
            src
          }
        }
      }
    }
  }
`
