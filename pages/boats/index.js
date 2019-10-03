import React from 'react'

import punts from '../../punts.json'
import PuntCard from '../../components/PuntCard'

export default () => {
  //sort punts by number descending
  let boats = Object.values(punts).sort((a, b) => b.sailNumber - a.sailNumber)

  return (
    <div className="cf ma2-l">
      {boats.map(boat => (
        <PuntCard
          className="fl w-100 w-third-m w-25-l pa2"
          key={boat.slug}
          punt={boat}
        />
      ))}
    </div>
  )
}
