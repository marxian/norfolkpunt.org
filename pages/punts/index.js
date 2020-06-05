import React from 'react'

import { getBoats } from '../../lib/cms'
import PuntCard from '../../components/PuntCard'

export default ({ punts }) => {
  //sort punts by number descending
  let boats = Object.values(punts).sort(
    (a, b) => b.data.sailNumber - a.data.sailNumber
  )

  return (
    <div className="cf ma2-l">
      {boats.map(({ data, slug }) => (
        <div className="fl w-100 w-third-m w-25-l pa2" key={slug}>
          <PuntCard punt={data} />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const punts = getBoats()

  return {
    props: {
      punts,
    },
  }
}
