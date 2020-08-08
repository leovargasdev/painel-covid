import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GiHearts } from 'react-icons/gi';
import { FaThumbsUp } from 'react-icons/fa';
import media from 'styled-media-query';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import SEO from '~/components/SEO';

const GlobalStyles = createGlobalStyle`
  body {
    line-height: 1;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais definida */
    background: #26547C;
    color: #fafaff;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  h1 {
    font-size: 40px;
  }

  h1, h2 {
    margin: 0 0 24px;
  }

  h2 {
    width: 100%;
    text-align: center;
    max-width: 900px;
  }

  img {
    border-radius: 4px;
    width: 480px;
    height: auto;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  a {
    text-decoration: none;
    padding: 8px 40px;
    margin: 15px 0 0;
    background: transparent;
    color: #fafaff;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid #fafaff;
    transition-duration: 0.6s;

    &:hover {
      background: #fafaff;
      color: #26547C;
    }
  }
  ${media.lessThan('large')`
    margin: 0;
    padding: 0;

    svg {
      width: 18px;
      height: 18px;
    }
    h1 {
      font-size: 16px;
    }
    h1, h2 {
      text-align: center;
      margin: 0 0 20px;
    }
    h2 {
      font-size: 14px;
    }
    img {
      width: 90%;
    }
    a {
      margin-top: 40px;
      font-size: 12px;
    }
  `}
`;

const ObrigadoPage = () => (
  <>
    <SEO title="Obrigado" />
    <Container>
      <h1>
        Fico muito grato pela sua mensagem! <GiHearts color="#FB3640" />
      </h1>
      <h2>
        Lerei ela em breve!! Caso você tenha preenchido o campo email e
        está mensagem necessite de uma resposta, devo responde-lá o quanto antes!
      </h2>
      <h1>
        Desde já eu agradeço o seu apoio! <FaThumbsUp color="#FFD166" />
      </h1>

      <img src="https://media.giphy.com/media/m2Q7FEc0bEr4I/giphy.gif" alt="Gif agradecendo o contato" />

      <AniLink to="/">
        VOLTAR
      </AniLink>

    </Container>
    <GlobalStyles />
  </>
);
export default ObrigadoPage;
