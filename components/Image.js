import React from 'react'
import GatsbyImage from 'gatsby-image'

export default ({ data, className }) => {
  return (
    <GatsbyImage
      className={className}
      fluid={{
        aspectRatio: 1,
        sizes: '(max-width: 300px) 100vw, 300px',
        src: data.fluid.src,
        srcSet: data.fluid.srcSet,
        base64: data.lqip,
      }}
      backgroundColor={true}
    />
  )
}
