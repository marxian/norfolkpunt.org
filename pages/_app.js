import React from 'react'
import App from 'next/app'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

import '../styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>{`Norfolk Punt Owners Association`}</title>
          <meta
            name="Description"
            content="The Norfolk Punt is a performance racing dinghy with a long and fascinating history."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    )
  }
}

export default MyApp
