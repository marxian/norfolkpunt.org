import React from 'react'
import Link from 'next/link'
import images from '../images'
import Image from './Image'
import BackgroundImage from './BackgroundImage'

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
          lqip: require('../images/photograph-wanted.png?lqip'),
          fluid: require('../images/photograph-wanted.png?resize&sizes[]=200&sizes[]=600&sizes[]=1000&sizes=2000'),
        }}
      />
    )}
    <span className="db f4 b pt1">{punt.name}</span>
    <span className="db f5 light-gray b pb1">{punt.sailNumber}</span>
    {/* </a>
    </Link> */}
  </div>
)
