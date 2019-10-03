import React from 'react'
import GatsbyBackgroundImage from 'gatsby-background-image'

export default ({ data, className, children }) => {
  let fluid = {
    aspectRatio: 1,
    sizes: '(max-width: 300px) 100vw, 300px',
    src: data.fluid.src,
    srcSet: data.fluid.srcSet,
    base64: data.lqip.preSrc,
  }
  return (
    <GatsbyBackgroundImage
      className={className}
      fluid={fluid}
      backgroundColor={true}
    >
      {children}
    </GatsbyBackgroundImage>
  )
}
