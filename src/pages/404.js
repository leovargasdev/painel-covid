import React from 'react';
import styled from 'styled-components';

import SEO from '~/components/SEO';
import Layout from '~/components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    color: #FF5E5B;
    font-size: 60px;
    text-transform: uppercase;
  }
  p {
    font-size: 30px;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>Página Não Encontrada</h1>
      <p>Por favor, verifique seu caminho!</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
