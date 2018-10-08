import { createGlobalStyle } from 'styled-components'
import Variables from './variables'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  audio,
  canvas,
  img,
  video {
    display: block;
  }

  body {
    margin: 0;
    font-family: var(--sans);
    font-size: var(--font-default);
    line-height: 1.35;
    color: var(--text-darkest);
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:focus {
    outline: 0;
  }


  p,
  small {
    margin: 0;
    padding: 0;
  }


  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  blockquote,
  q {
    margin: 0;
  }

  cite {
    font-style: inherit;
  }

  form {
    margin: 0;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }


  pre,
  figure {
    margin: 0;
  }

  :root {
    ${Variables};
  }
`

export default GlobalStyle
