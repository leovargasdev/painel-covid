import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* @import url('https://gatsfonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap'); */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
    background: #000;
  }
  body, input, button, textarea {
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais definida */
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.primary};
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
