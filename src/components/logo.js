import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import { link } from 'styles/shared'

const LogoContainer = styled.a`
  ${link};
  width: 36px;
  height: 36px;
  background: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props =>
    props.theme === 'light' ? 'var(--text-lightest)' : 'var(--text-darkest)'};
  box-shadow: 0 0 0 2px var(--bgColor-accent-medium);
  ${media.lessThan('medium')`
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--bgColor-accent-medium),
  `};
`

const LogoText = styled.span`
  font-size: var(--font-small);
  letter-spacing: 0.06em;
  font-weight: 500;
`

const Logo = ({ theme }) => (
  <Link to="/">
    <LogoContainer theme={theme}>
      <LogoText>DF</LogoText>
    </LogoContainer>
  </Link>
)

export default Logo
