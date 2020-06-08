import React from 'react'

import { getBoatBySlug, getBoatSlugs, markdownToHtml } from '../../lib/cms'

import PuntDetails from '../../components/PuntDetails'

export default function Boat({ boat }) {
  return <PuntDetails name={boat.name} sailNumber={boat.sailNumber} />
}

export async function getStaticProps({ params }) {
  const { data, content: markdown = '' } = getBoatBySlug(params.slug)
  const content = await markdownToHtml(markdown)

  return {
    props: {
      boat: {
        data,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const boats = getBoatSlugs()

  return {
    paths: boats.map((slug) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
