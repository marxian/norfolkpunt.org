import React from 'react'
import App from 'next/app'

import { MDXProvider } from '@mdx-js/react'
import Image from '../components/Image'
import BackgroundImage from '../components/BackgroundImage'
import Nav from '../components/Nav'
import PuntDetails from '../components/PuntDetails'

import '../styles/index.css'

const components = {
  Image,
  BackgroundImage,
  PuntDetails,
  wrapper: props => (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  ),
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    )
  }
}

export default MyApp
