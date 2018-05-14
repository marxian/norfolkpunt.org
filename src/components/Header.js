import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

import SubtleLink from './SubtleLink'

const activeStyle = {
  color: 'grey',
  fontStyle: 'bold',
}

const HeaderContainer = styled(Flex)`
  color: white;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 15px black;
  border-bottom: 2px solid #999;
  padding: 0.2em;
`
const NavLink = styled(Link)`
  color: white;
  font-size: large;
`
const Title = styled.strong`
  color: white;
`
const Subtitle = styled.em`
  color: grey;
  font-size: x-large;
`
const Separator = () => <span> &#x2248; </span>

const NavBox = styled(Box)`
  text-align: right;
  vertical-align: middle;
`

const Header = ({ title, subtitle }) => (
  <HeaderContainer>
    <Box w={[1, 1 / 3, 1 / 2]} p={1}>
      <h1 style={{ marginBottom: 0 }}>
        <SubtleLink to="/">
          <Title>{title}</Title> <Subtitle>{subtitle}</Subtitle>
        </SubtleLink>
      </h1>
    </Box>
    <NavBox w={[1, 2 / 3, 1 / 2]} p={1}>
      <nav>
        <NavLink activeStyle={activeStyle} to="/punts/">
          Punts
        </NavLink>
        <Separator />
        <NavLink activeStyle={activeStyle} to="/gallery/">
          Gallery
        </NavLink>
        <Separator />
        <NavLink activeStyle={activeStyle} to="/events/">
          Events
        </NavLink>
        <Separator />
        <NavLink activeStyle={activeStyle} to="/documents/">
          Details
        </NavLink>
      </nav>
    </NavBox>
  </HeaderContainer>
)

export default Header
