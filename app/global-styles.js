import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    color: #4a4a4a;
    font-size: 13px;
  }

  html {
    body {
      font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 13px;
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  .non-touch {
    pointer-events: none;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }

  a, button {
    &:focus, &:active {
      outline: 0;
    }
  }

  .textUnderline {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .errorText {
    color: red;
    font-size: 11px;
  }

  .pageTitle {
    margin: 0 0 25px;
    font-size: 24px;
    line-height: 32px;
    color: #111827;
  }
`;

export default GlobalStyle;
