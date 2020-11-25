import React from 'react';
import PropTypes from 'prop-types';
import { FaUsers, FaHome } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import SEO from '~/components/SEO';

import { Container, Content, Footer } from './styles';

import GlobalStyle from '~/styles/global';
import { main } from '~/styles/themes';

import imgMeta from '~/images/covid-share.png';

const LayoutCovid = ({ city, route, children }) => (
  <ThemeProvider theme={main}>
    <SEO
      title={`Coronavírus ${city}`}
      route={route}
      description={`${city}: Painel com as informações da situação Epidemiológica sobre o COVID-19`}
      image={imgMeta}
    />
    <Container>
      <GlobalStyle />

      <Content>
        {children}
      </Content>

      <AniLink to="/">
        <FaHome />
        voltar para o Ínicio
      </AniLink>

      <Footer>
        <span>
          <a href="https://leonardovargas.me">Leonardo Vargas</a> © 2020. Todos os direitos reservados a população
        </span>
        <FaUsers />
      </Footer>

    </Container>
  </ThemeProvider>
);

LayoutCovid.propTypes = {
  children: PropTypes.node.isRequired,
  city: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default LayoutCovid;
