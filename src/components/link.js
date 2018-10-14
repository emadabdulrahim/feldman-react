import React from 'react'
import { Button } from 'evergreen-ui'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { link } from 'styles/shared'

const StyledLink = styled(Link)`
  ${link};
`

const StyledButton = styled(Button)`
  color: var(--text-darkest) !important;
  letter-spacing: 0.07em !important;
  font-family: var(--sans) !important;
  font-size: var(--font-small) !important;
`

const BasicLink = ({ children, ...rest}) => (
  <StyledLink {...rest}>
    <StyledButton appearance="minimal">{children}</StyledButton>
  </StyledLink>
)

export default BasicLink