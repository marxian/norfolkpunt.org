import React from 'react'

import punts from '../../punts.json'
import PuntCard from '../../components/PuntCard'

export default () => {
  //sort punts by number descending
  let boats = Object.values(punts).sort((a, b) => b.sailNumber - a.sailNumber)

  return (
    <article>
      <div className="cf w-100 pa2-ns">
        {boats.map(boat => (
          <PuntCard key={boat.slug} punt={boat} />
        ))}
      </div>
    </article>
  )
}
