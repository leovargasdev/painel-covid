import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const GlobalStyles = createGlobalStyle`
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

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.lessThan('large')`
    padding: 10px 0;
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  ${media.lessThan('large')`
    padding: 0 6px;
  `}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  span {
    color: #555;
    font-size: 13px;
    font-weight: 100;
    padding-right: 3px;

    a {
      text-decoration: none;
    }
  }
  ${media.lessThan('large')`
    margin: 20px 0 10px;
  `}
`;
