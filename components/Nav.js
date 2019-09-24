import React from 'react'

export default () => (
  <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav className="f6 fw6 ttu tracked">
      <a className="link dim white dib mr3" href="/" title="Home">
        Home
      </a>
      <a className="link dim white dib mr3" href="/boats">
        Boats
      </a>
      <a className="link dim white dib mr3" href="/gallery">
        Gallery
      </a>
      <a className="link dim white dib mr3" href="/technical">
        Technical
      </a>
      <a className="link dim white dib" href="/contact">
        Contact
      </a>
    </nav>
  </header>
)
