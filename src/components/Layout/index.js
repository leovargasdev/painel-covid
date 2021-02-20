import React from 'react';
import PropTypes from 'prop-types';
import { FaUsers, FaHome, FaChevronUp } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import SEO from '~/components/SEO';

import { Container, Content, Footer, ControllFooter } from './styles';

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

      <Footer>
        <span>
          <a target="_new" href="https://leonardovargas.me">Leonardo Vargas</a> © {new Date().getFullYear()}. Todos os direitos reservados a população
        </span>
        <FaUsers />
      </Footer>

      <ControllFooter>
        <AniLink to="/">
          <FaHome size={20} />
          <span>voltar ao início</span>
        </AniLink>
        <button type="button" onClick={() => { document.documentElement.scrollTop = 0; }}>
          <FaChevronUp size={20} />
          <span>voltar ao topo</span>
        </button>
      </ControllFooter>
    </Container>
  </ThemeProvider>
);

LayoutCovid.propTypes = {
  children: PropTypes.node.isRequired,
  city: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default LayoutCovid;
