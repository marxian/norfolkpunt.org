import React, { Component } from 'react'
import { Box } from 'grid-styled'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import styled from 'styled-components'

import 'react-image-lightbox/style.css'

const FocusTrigger = styled.div`
  cursor: pointer;
`

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusIndex: null,
    }
  }

  render() {
    const { focusIndex } = this.state
    const { pictures } = this.props
    return (
      <div>
        {pictures.map(({ picture }, i) => (
          <Box w={[1, 1 / 2, 1 / 3, 1 / 5]} key={picture.id}>
            <FocusTrigger
              role="button"
              onClick={() => this.setState({ focusIndex: i })}
            >
              <Img fluid={picture.fluid} key={picture.id} />
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
      </div>
    )
  }
}

export default Gallery
