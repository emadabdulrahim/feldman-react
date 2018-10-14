import React from 'react'
import styled, { css } from 'styled-components'
import { link } from 'styles/shared'
import { colors } from 'styles/variables'
import Manager from './manager'
import { rgba } from 'polished'

const line = css`
  --line-width: 20px;
  content: '';
  position: absolute;
  width: var(--line-width);
  height: 2px;
  border-radius: var(--radius);
  left: calc(var(--line-width) / 2);
  background: var(--bgColor-main-dark);
  transition: width, transform var(--trans-short) var(--spring);
`

const DoubleDash = styled.button`
  ${link};
  vertical-align: baseline;
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  pointer-events: all;
  border-radius: var(--radius);
  outline: none;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:focus {
    box-shadow: ${rgba(colors.blue.dark, 0.14)} 0px 0px 0px 3px,
      ${rgba(colors.blue.dark, 0.47)} 0px 0px 0px 1px inset;
  }

  &::before {
    ${line};
    top: 16px;
    transform: ${props => props.isOpen && 'translateY(3px) rotate(135deg)'};
  }

  &::after {
    ${line};
    bottom: 16px;

    transform: ${props => props.isOpen && 'translateY(-3px) rotate(45deg)'};
  }
`

class Hamburger extends React.Component {
  render() {
    return (
      <Manager isOpen={false}>
        {({ state, setState }) => (
          <DoubleDash
            isOpen={state.isOpen}
            onClick={() => setState({ isOpen: !state.isOpen })}
          />
        )}
      </Manager>
    )
  }
}

export default Hamburger
