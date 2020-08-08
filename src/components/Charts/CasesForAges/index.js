import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { lighten } from 'polished';
import styled from 'styled-components';
import media from 'styled-media-query';

import options from '~/utils/configCharts';
import ContainerCharts from '~/components/Charts/Container';
import colors from '~/styles/colors';

const Container = styled.div`
  flex: 1;
  margin-left: 20px;
  ${media.lessThan('large')`
    margin: 0;
  `};
`;

const Content = styled.div`
  height: 180px;
  ${media.lessThan('large')`
    height: 240px;
  `};
`;

const CasesForAges = ({
  fonte, data: { range1, range2, range3, range4, range5, range6, range7, range8 }
}) => {
  const data = {
    labels: [
      '0-9', '10-19', '20-29', '30-39',
      '40-49', '50-59', '60-69', '+70'
    ],
    datasets: [
      {
        label: 'Casos Confirmados',
        backgroundColor: lighten(0.2, colors.purple),
        borderColor: colors.purple,
        borderWidth: 2,
        hoverBackgroundColor: colors.purple,
        data: [range1, range2, range3, range4, range5, range6, range7, range8]
      }
    ]
  };

  return (
    <Container>
      <ContainerCharts title="Casos Confirmados por Faixa Etária" fonte={fonte}>
        <Content>
          <Bar
            data={data}
            options={{
              ...options,
              title: {
                text: 'Faixas Etárias em anos',
                ...options.title
              }
            }}
          />
        </Content>
      </ContainerCharts>
    </Container>
  );
};

CasesForAges.propTypes = {
  fonte: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default CasesForAges;
