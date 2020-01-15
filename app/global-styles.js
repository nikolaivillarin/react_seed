import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app {
    height: 100%;
    line-height: 1;
  }
  body{
    overflow: hidden;
  }
  #app{
  }
`;

export default GlobalStyle;
