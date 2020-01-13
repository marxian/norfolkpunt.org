import React from 'react'

export default () => (
  <footer className="cf bg-black-90 white f6 pv3 pv4-l ph4">
    <p className="fr f4">
      <a
        className="link white underline-hover"
        href="mailto:norfolkpunt@gmail.com"
      >
        Contact
      </a>
    </p>
    <p>
      &copy;{new Date().getFullYear()} Norfolk&nbsp;Punt Owners&nbsp;Association
    </p>
    <p>
      Most photographs by kind permission &copy;&nbsp;
      <a
        className="link white underline-hover"
        href="https://www.myerscoughpictures.org.uk"
      >
        Robin&nbsp;Myerscough
      </a>
    </p>
  </footer>
)
