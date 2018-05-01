import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'

const Header = ({ siteTitle }) => (
  <Flex>
    <Box>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to="/boats/">Boats</Link>
      <Link to="/pictures/">Pictures</Link>
      <Link to="/events/">Events</Link>
      <Link to="/documents/">Details</Link>
    </Box>
  </Flex>
)

export default Header
