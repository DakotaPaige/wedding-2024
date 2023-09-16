import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import vw from './utils';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  main {
    width: 100%;
    background-color: ${theme.color.tan};
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
  }

  /* Constants */

  .center {
    text-align: center;
  }

  .mobile-only {
    ${vw('display', 'block', 'none')}
  }

  .black {
    color: ${theme.color.black};
  }

  .dark-purple {
    color: ${theme.color.darkPurple};
  }

  .tan {
    color: ${theme.color.tan};
  }

  /* Font styles */

  h1 {
    font-family: ${theme.font.family};
    font-weight: 400;
    font-style: normal;
    ${vw('font-size', 36, 42, 64)}
    &.cursive {
      font-family: ${theme.font.cursive};
      ${vw('font-size', 46, 72, 120)}
    }
  }

  h2 {
    font-family: ${theme.font.family};
    font-weight: 400;
    font-style: normal;
    ${vw('font-size', 28, 36, 48)}
  }

  h3 {
    font-family: ${theme.font.family};
    font-weight: 400;
    font-style: normal;
    ${vw('font-size', 18, 24, 36)}
    &.cursive {
      font-family: ${theme.font.cursive};
    }
    &.small {
      ${vw('font-size', 18, 18, 28)}
    }
  }
  
  p {
    font-family: ${theme.font.family};
    font-weight: 400;
    font-style: normal;
    ${vw('font-size', 16, 18, 24)}
    &.small {
      ${vw('font-size', 16, 14, 18)}
    }
  }

  .nav {
    font-family: ${theme.font.family};
    font-weight: 400;
    font-style: normal;
    ${vw('font-size', 22, 28, 32)}
  }
`;

export default GlobalStyle;
