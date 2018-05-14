import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  padding: 0.5em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-in-out;
  :hover {
    transform: scale(1.02);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 5;
  }
`
export default Card
