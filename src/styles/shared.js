import styled, { css } from 'styled-components'

export const link = css`
  touch-action: manipulation;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`

export const flex = css`
  display: flex;
`

export const flexY = css`
  ${flex};
  align-items: center;
`

export const flexX = css`
  ${flex};
  justify-content: center;
`

export const flexXY = css`
  ${flexY};
  justify-content: center;
`

export const flexBetween = css`
  ${flex};
  justify-content: space-between;
`

export const flexBetweenY = css`
  ${flexY};
  justify-content: space-between;
`

export const flexColumn = css`
  ${flex};
  flex-direction: column;
`

export const Flex = styled.div`
  ${flex};
`

export const FlexY = styled.div`
  ${flexY};
`

export const FlexX = styled.div`
  ${flexX};
`

export const FlexXY = styled.div`
  ${flexXY};
`

export const FlexBetween = styled.div`
  ${flexBetween};
`

export const FlexBetweenY = styled.div`
  ${flexBetweenY};
`

export const FlexColumn = styled.div`
  ${flexColumn};
`
