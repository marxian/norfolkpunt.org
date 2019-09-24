import React from 'react'
import Link from 'next/link'
import images from '../images'
import Image from './Image'

export default ({ punt }) => (
  <div className="fl w-50 w-25-m w-20-l pa2">
    <Link href={`/boats/${punt.slug}`}>
      <a className="db link dim tc">
        {punt.coverImage ? (
          <Image data={images[punt.coverImage]} />
        ) : (
          <Image data={images['./pages/boats/defaultCover.jpg']} />
        )}
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Name</dt>
          <dd className="ml0 black truncate w-100">{punt.name}</dd>
          <dt className="clip">Number</dt>
          <dd className="ml0 gray truncate w-100">{punt.sailNumber}</dd>
        </dl>
      </a>
    </Link>
  </div>
)
