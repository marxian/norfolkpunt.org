import React from 'react'
import Link from 'next/link'
import images from '../images'
import Image from './Image'

export default ({ punt, className }) => (
  <div className={`${className} tc grow`}>
    {/* <Link href={`/boats/${punt.slug}`}>
      <a className="db link dim tc"> */}
    {punt.coverImage ? (
      <Image
        data={{
          ...images[punt.coverImage],
          aspectRatio: 1,
        }}
      />
    ) : (
      <Image
        data={{
          ...images['./pages/boats/defaultCover.jpg'],
          aspectRatio: 1,
        }}
      />
    )}
    <span className="db f4 b pv1">{punt.name}</span>
    <span className="db f5 gray b">{punt.sailNumber}</span>
    {/* </a>
    </Link> */}
  </div>
)
