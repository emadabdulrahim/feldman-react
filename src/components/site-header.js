import React from 'react'
import styled from 'styled-components'
import BasicLink from './link'
import Logo from 'components/logo'
import media from 'styled-media-query'
import { IconButton } from 'evergreen-ui'
import Hamburger from './hamburger'

const HeaderContainer = styled.nav`
  background-color: var(--bgColor-main-lightest);
  box-shadow: var(--shadow-s1);
  position: relative;
  z-index: 1;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 16px;
`

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  min-width: 450px;

  ${media.lessThan('medium')`
    display: none;
  `};
`

const DotSeparator = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 4px var(--space-12) 0;
`

const StyledIcon = styled.span`
  ${media.greaterThan('medium')`
    display: none;
  `};
  display: inline-block;
`

const SiteHeader = () => (
  <HeaderContainer>
    <Header>
      <Logo theme="dark" />
      {/* <Nav>
        <BasicLink to="/blog">Blog</BasicLink>
        <DotSeparator />
        <BasicLink to="/podcast">Postcast</BasicLink>
        <DotSeparator />
        <BasicLink to="#books">Books</BasicLink>
        <DotSeparator />
        <BasicLink to="/about">About</BasicLink>
        <DotSeparator />
        <BasicLink to="/workshop">Workshop</BasicLink>
      </Nav> */}
      <Hamburger />
    </Header>
  </HeaderContainer>
)

export default SiteHeader
