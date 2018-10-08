import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from 'components/logo'
import media from 'styled-media-query'
import { IconButton } from 'evergreen-ui'

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
  margin: 0 var(--space-12);
`

const StyledIcon = styled.span`
  ${media.greaterThan('medium')`
    display: none;
  `};
  display: inline-block;
`

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-size: var(--font-small);
  letter-spacing: 0.06em;
`

const SiteHeader = () => (
  <HeaderContainer>
    <Header>
      <Logo theme="dark" />
      <Nav>
        <NavLink to="/blog">Blog</NavLink>
        <DotSeparator />
        <NavLink to="/podcast">Postcast</NavLink>
        <DotSeparator />
        <NavLink to="#books">Books</NavLink>
        <DotSeparator />
        <NavLink to="/about">About</NavLink>
        <DotSeparator />
        <NavLink to="/workshop">Workshop</NavLink>
      </Nav>
      <StyledIcon>
        <IconButton icon="menu" appearance="minimal" iconSize={20} />
      </StyledIcon>
    </Header>
  </HeaderContainer>
)

export default SiteHeader
