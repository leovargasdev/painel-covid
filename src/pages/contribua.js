import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { FaAt } from 'react-icons/fa';
import { MdSend, MdLocationOn } from 'react-icons/md';
import { GiHearts } from 'react-icons/gi';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { ContainerInput } from '~/components/Covid/ContactForm/styles';

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

  h1, h3, h2 {
    margin: 0 0 24px;
  }

  h2 {
    svg {
      padding-left: 3px;
      width: 20px;
      height: 20px;
    }
  }

  h3 {
    width: 100%;
    text-align: center;
    line-height: 26px;
    max-width: 900px;
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

  form {
    display: flex;
    flex-direction: column;
    max-width: 720px;
    width: 100%;

    label {
      color: #fafaff;
      span {
        margin-left: 2px;
        font-size: 20px;
        color: #DB162F;
      }
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;

    padding: 12px 80px;
    margin: 0;
    background: transparent;
    color: #fafaff;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #fafaff;
    transition-duration: 0.6s;

    &:hover {
      background: #fafaff;
      color: #26547C;
      svg {
        color: #26547C;
      }
    }

    svg {
      padding-left: 2px;
      color: #fafaff;
    }
  }

  ${media.lessThan('large')`
    margin: 0;
    padding: 0;
    h1 {
      font-size: 17px;
    }
    h1, h2, h3 {
      text-align: center;
      margin: 0 0 20px;
    }
    h2 {
      font-size: 16px;
      svg {
        width: 18px;
        height: 18px;
      }
    }
    h3 {
      font-size: 13px;
      line-height: 20px;
    }
    a {
      margin-top: 40px;
      font-size: 12px;
    }
    form {
      width: 80%;

      button {
        font-size: 14px;
        margin-top: 5px;
        padding: 6px 60px;
      }
    }
  `}
`;

const ContribuaPage = () => {
  const [isFocused, setIsFocused] = useState({
    email: false, message: false
  });

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <SEO
        title="Contribua"
      />
      <Container>
        <h1>
          Projeto de Expansão para outras Cidades!
        </h1>

        <h3>
          Pretendo expandir a ideia deste painel para outras cidades, melhorando assim o
          acesso à informação da comunidade daquela região. Se você tem interesse de
          implantá-lo na sua cidade, basta preencher este formulário com seu
          email e o nome da sua cidade.
        </h3>

        <h2>Devo entrar em contato em breve! Agradeço! <GiHearts color="#FB3640" /></h2>

        <form name="Contact Form" method="POST" data-netlify="true" action="/obrigado">
          <input type="hidden" name="form-name" value="Contact Form" />

          <label>Cidade<span>*</span> (campo obrigatório)</label>
          <ContainerInput isFocus={isFocused.message}>
            <MdLocationOn size={30} />
            <input
              type="text"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setIsFocused({ email: false, message: true })}
              onBlur={() => setIsFocused({ email: false, message: false })}
              placeholder="Digite o nome da sua cidade"
            />
          </ContainerInput>

          <label>Email<span>*</span> (campo obrigatório)</label>
          <ContainerInput isFocus={isFocused.email}>
            <FaAt size={30} />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused({ email: true, message: false })}
              onBlur={() => setIsFocused({ email: false, message: false })}
              placeholder="Digite seu email"
            />
          </ContainerInput>
          {message && email && (
            <button type="submit" disabled={!message && !email}>
              ENVIAR
              <MdSend size={20} />
            </button>
          )}
        </form>


        <AniLink to="/">
          VOLTAR
        </AniLink>

      </Container>
      <GlobalStyles />
    </>
  );
};
export default ContribuaPage;
