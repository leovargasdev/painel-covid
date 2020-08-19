import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

import ContactForm from '~/components/ContactForm';
import SEO from '~/components/SEO';

import { Container, Content, Footer } from './styles';

import GlobalStyle from '~/styles/global';
import { main } from '~/styles/themes';

import imgMeta from '~/images/covid-share.png';

const LayoutCovid = ({ city, contact = true, children }) => {
  const url = city.toLowerCase().replace(' ', '-');
  return (
    <ThemeProvider theme={main}>
      <SEO
        title={`Coronavírus ${city}`}
        url={`https://painelcoronavirus.com/${url}`}
        description={`${city}: Painel com as informações da situação Epidemiológica sobre o COVID-19`}
        image={imgMeta}
      />
      <Container>
        <GlobalStyle />

        <Content>{children}</Content>

        {contact && <ContactForm />}

        <Footer>
          <span>
            © 2020 <a href="https://leonardovargas.me">Leonardo Vargas</a>, todos os direitos reservados a população
          </span>
          <FaHeart />
        </Footer>

      </Container>
    </ThemeProvider>
  );
};

LayoutCovid.propTypes = {
  children: PropTypes.node.isRequired,
  contact: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired
};

export default LayoutCovid;
