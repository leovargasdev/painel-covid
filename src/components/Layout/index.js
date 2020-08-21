import React from 'react';
import PropTypes from 'prop-types';
import { FaUsers } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

import ContactForm from '~/components/ContactForm';
import SEO from '~/components/SEO';

import { Container, Content, Footer } from './styles';

import GlobalStyle from '~/styles/global';
import { main } from '~/styles/themes';

import imgMeta from '~/images/covid-share.png';

const LayoutCovid = ({ city, contact, route, children }) => (
  <ThemeProvider theme={main}>
    <SEO
      title={`Coronavírus ${city}`}
      route={route}
      description={`${city}: Painel com as informações da situação Epidemiológica sobre o COVID-19`}
      image={imgMeta}
    />
    <Container>
      <GlobalStyle />

      <Content>{children}</Content>

      {contact && <ContactForm />}

      <Footer>
        <span>
          <a href="https://leonardovargas.me">Leonardo Vargas</a> © 2020. Todos os direitos reservados a população
        </span>
        <FaUsers />
      </Footer>

    </Container>
  </ThemeProvider>
);

LayoutCovid.defaultProps = {
  contact: true
};


LayoutCovid.propTypes = {
  children: PropTypes.node.isRequired,
  contact: PropTypes.bool,
  city: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default LayoutCovid;
