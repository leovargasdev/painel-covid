import React from 'react';
import styled from 'styled-components';

import SEO from '~/components/SEO';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    color: #FF5E5B;
    font-size: 60px;
    line-height: 0px;
    text-transform: uppercase;
  }
  p {
    font-size: 30px;
  }
`;

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container>
      <h1>Página Não Encontrada</h1>
      <p>Por favor, verifique seu caminho!</p>
    </Container>
  </>
);

export default NotFoundPage;
