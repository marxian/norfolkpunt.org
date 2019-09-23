import React from 'react'
import punts from '../../punts.json'
import images from '../../images'
import Image from '../../components/Image'

const PuntCard = ({ punt }) => (
  <>
    <h3>{punt.name}</h3>
    {punt.coverImage ? <Image data={images[punt.coverImage]} /> : null}
  </>
)

export default () => {
  //sort punts by number
  let boats = Object.values(punts)
  return boats.map(boat => <PuntCard key={boat.slug} punt={boat} />)
}
