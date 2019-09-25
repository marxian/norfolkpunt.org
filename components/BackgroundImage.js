import React from 'react'
import GatsbyBackgroundImage from 'gatsby-background-image'

export default ({ data, className, children }) => {
  return (
    <GatsbyBackgroundImage
      className={className}
      fluid={{
        aspectRatio: 1,
        sizes: '(max-width: 300px) 100vw, 300px',
        src: data.fluid.src,
        srcSet: data.fluid.srcSet,
        base64: data.lqip,
      }}
      backgroundColor={true}
    >
      {children}
    </GatsbyBackgroundImage>
  )
}
