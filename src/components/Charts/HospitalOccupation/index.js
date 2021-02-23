import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';

import ContainerCharts from '~/components/Charts/Container';

import { Content, Chart } from './styled';

const HospitalOccupation = ({ data: { uti, nursery }, fonte }) => {
  const UTI_TOTAL = 92;
  const NURSERY_TOTAL = 124;

  const dataUti = {
    labels: ['Leitos Ocupados', 'Leitos Disponiveis'],
    datasets: [{
      data: [uti, UTI_TOTAL - uti],
      borderWidth: 1,
      backgroundColor: ['#14274e', '#9ba4b4']
    }]
  };

  const dataEnfermaria = {
    labels: ['Leitos Ocupados', 'Leitos Disponiveis'],
    datasets: [{
      data: [nursery, NURSERY_TOTAL - nursery],
      borderWidth: 1,
      backgroundColor: ['#213e3b', '#9ba4b4']
    }]
  };

  return (
    <ContainerCharts
      title="Ocupação dos Leitos Hospitalares(Público e Privado)"
      rangeValues={{ active: false }}
      fonte={fonte}
    >
      <Content>
        <Chart>
          <p>Leitos de UTI</p>
          <Pie
            options={{ legend: { labels: { fontColor: '#dedede' } } }}
            data={dataUti}
          />
          <span>Capacidade Total: <strong>{UTI_TOTAL} leitos</strong></span>
          <span>Número ocupados: <strong>{uti} leitos</strong></span>
          <span>
            Porcentagem da ocupação: <strong> {((uti * 100) / UTI_TOTAL).toFixed(2)}%</strong>
          </span>
        </Chart>
        <Chart>
          <p>Leitos de Enfermaria</p>
          <Pie
            options={{ legend: { labels: { fontColor: '#dedede' } } }}
            data={dataEnfermaria}
          />
          <span>Capacidade Total: <strong>{NURSERY_TOTAL} leitos</strong></span>
          <span>Número ocupados: <strong>{nursery} leitos</strong></span>
          <span>
            Porcentagem da ocupação:
            <strong> {((nursery * 100) / NURSERY_TOTAL).toFixed(2)}%</strong>
          </span>
        </Chart>
      </Content>
    </ContainerCharts>
  );
};

HospitalOccupation.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  fonte: PropTypes.string.isRequired
};

export default HospitalOccupation;
