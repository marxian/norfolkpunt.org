import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'

const activeStyle = {
  color: 'red',
  fontStyle: 'bold',
}

const Header = ({ siteTitle }) => (
  <Flex>
    <Box>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Link activeStyle={activeStyle} to="/boats/">
        Boats
      </Link>
      <Link activeStyle={activeStyle} to="/pictures/">
        Pictures
      </Link>
      <Link activeStyle={activeStyle} to="/events/">
        Events
      </Link>
      <Link activeStyle={activeStyle} to="/documents/">
        Details
      </Link>
    </Box>
  </Flex>
)

export default Header
