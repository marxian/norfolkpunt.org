import React from 'react'
import GatsbyImage from 'gatsby-image'

export default ({ data, className, key }) => {
  let fluid = {
    aspectRatio: data.aspectRatio || 1,
    sizes: '(max-width: 300px) 100vw, 300px',
    src: data.fluid.src,
    srcSet: data.fluid.srcSet,
    base64: data.lqip.preSrc,
  }

  return (
    <GatsbyImage
      key={key}
      className={className}
      fluid={fluid}
      backgroundColor={true}
    />
  )
}
