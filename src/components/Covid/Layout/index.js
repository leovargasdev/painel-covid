import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAstronaut } from 'react-icons/fa';

import ContactForm from '../ContactForm';
import SEO from '~/components/SEO';

import { GlobalStyles, Container, Content, Footer } from './styles';
import imgMeta from '~/images/covid-share.png';

const LayoutCovid = ({ city, children }) => {
  const url = city.toLowerCase().replace(' ', '-');
  return (
    <>
      <SEO
        title={`Coronavírus ${city}`}
        url={`https://leonardovargas.me/coronavirus-${url}`}
        description={`${city}: Painel com as informações da situação Epidemiológica sobre o COVID-19`}
        image={imgMeta}
      />
      <Container>
        <Content>{children}</Content>

        <ContactForm />

        <Footer>
          <span>
            by <a href="https://leonardovargas.me">Leonardo Vargas</a>
          </span>
          <FaUserAstronaut size={15} color="#333" />
        </Footer>
      </Container>
      <GlobalStyles />
    </>
  );
};

LayoutCovid.propTypes = {
  children: PropTypes.node.isRequired,
  city: PropTypes.string.isRequired
};
export default LayoutCovid;
