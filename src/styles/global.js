import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* @import url('https://gatsfonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap'); */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    color: ${({ theme }) => theme.primaryText};
  }
  body {
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais definida */
    background: #000;
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
