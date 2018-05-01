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
    </Box>
  </Flex>
)

export default Header
