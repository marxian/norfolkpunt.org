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
