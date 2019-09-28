import React from 'react'
import Link from 'next/link'

export default () => (
  <nav className="bg-black-90 w-100 pv1 ph3">
    <Link href="/">
      <a className="link dim tc" title="Home">
        <h1>
          <span className="f2 white">Norfolk&nbsp;Punt</span>{' '}
          <span className="f3 moon-gray">Owners&nbsp;Association</span>
        </h1>
      </a>
    </Link>
    {/* <div className="db dtc-l v-mid w-100 w-50-ns tc tr-l">
      <Link href="/boats">
        <a className="link dim white dib f4 f3-l dib mr3 mr4-l">Boats</a>
      </Link>
      <Link href="/technical">
        <a className="link dim white dib f4 f3-l dib mr3 mr4-l">Technical</a>
      </Link>
      <Link href="/contact">
        <a className="link dim white dib f4 f3-l dib mr3 mr4-l">Contact</a>
      </Link>
    </div> */}
  </nav>
)
