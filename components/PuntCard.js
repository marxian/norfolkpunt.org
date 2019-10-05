import React from 'react'
import Link from 'next/link'
import images from '../images'
import Image from './Image'

export default ({ punt, className }) => (
  <div className={`${className} bg-black-90 white tc grow`}>
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
    <span className="db f4 b pt1">{punt.name}</span>
    <span className="db f5 light-gray b pb1">{punt.sailNumber}</span>
    {/* </a>
    </Link> */}
  </div>
)
