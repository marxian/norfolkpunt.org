import React from 'react'

import Img from 'react-cloudinary-lazy-image'

export default ({ punt, className }) => (
  <div className={`${className} bg-black-90 white tc grow`}>
    {/* <Link href={`/boats/${punt.slug}`}>
      <a className="db link dim tc"> */}
    {punt.coverImage ? (
      <Img
        cloudName={'norfolkpunt'}
        imageName={punt.coverImage.split('/').pop()}
        fluid={{
          maxWidth: 300,
          height: 300,
        }}
        urlParams="c_fill,g_auto"
      />
    ) : (
      // <Image
      //   cloudName="norfolkpunt"
      //   publicId={punt.coverImage.split('/').pop()}
      //   dpr="auto"
      //   responsive
      //   width="auto"
      //   crop="fill"
      //   gravity="auto"
      //   responsiveUseBreakpoints="true"
      //   aspect_ratio="1"
      // >
      //   <Transformation quality="auto" fetchFormat="auto" />
      // </Image>
      <Img
        cloudName="norfolkpunt"
        imageName="photograph-wanted"
        fluid={{
          maxWidth: 300,
          height: 300,
        }}
      />
    )}
    <span className="db f4 b pt1">{punt.name}</span>
    <span className="db f5 light-gray b pb1">{punt.sailNumber}</span>
    {/* </a>
    </Link> */}
  </div>
)
