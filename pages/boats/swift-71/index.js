import React from 'react'
import PuntDetails from '../../../components/PuntDetails'

import punt from './details.json'

export default () => (
  <PuntDetails name={punt.name} sailNumber={punt.sailNumber} />
)
