import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import options from '~/utils/configCharts';
import ContainerCharts from '~/components/Charts/Container';

const Content = styled.div`
  width: auto;
  height: 300px;
  ${media.lessThan('large')`
    height: 250px;
  `};
`;

const CasesForAgesLines = ({ fonte, data }) => (
  <ContainerCharts title="Acumulado de casos confirmados por faixa etária por data de confirmação" fonte={fonte}>
    <Content>
      <Line
        data={data}
        options={{
          ...options,
          title: {
            text: 'Faixas Etárias em anos'
          },
          tooltips: {
            mode: 'point'
          }
        }}
      />
    </Content>
  </ContainerCharts>
);

CasesForAgesLines.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  fonte: PropTypes.string.isRequired
};

export default CasesForAgesLines;
