import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span,
  h2, h3, h4, h5, h6, p, blockquote, pre,
  a, img, small, strike, strong, sub, sup, tt, var,
  b, form, label, figure, figcaption, footer,
  header, hgroup, menu, nav, output, ruby, section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais definida */
    background: #fafaff;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style: none
  }
  button {
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
export default GlobalStyles;
