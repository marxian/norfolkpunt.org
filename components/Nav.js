import React from 'react'
import Link from 'next/link'

export default () => (
  <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav className="f6 fw6 ttu tracked">
      <Link href="/">
        <a className="link dim white dib mr3" title="Home">
          Home
        </a>
      </Link>
      <Link href="/boats">
        <a className="link dim white dib mr3">Boats</a>
      </Link>
      <Link href="/technical">
        <a className="link dim white dib mr3">Technical</a>
      </Link>
      <Link href="/contact">
        <a className="link dim white dib">Contact</a>
      </Link>
    </nav>
  </header>
)
