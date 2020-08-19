import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';

import ContainerCharts from '~/components/Charts/Container';

import { Content, Chart } from './styled';

const HospitalOccupation = ({ data: { uti, nursery } }) => {
  const dataUti = {
    labels: ['Casos confirmados', 'Casos suspeitos', 'Leitos Disponiveis'],
    datasets: [{
      data: [uti.confirmed, uti.suspected, uti.available],
      borderWidth: 1,
      backgroundColor: ['#29274C', '#7E52A0', '#D1B1C8']
    }]
  };

  const dataEnfermaria = {
    labels: ['Casos confirmados', 'Casos suspeitos', 'Leitos Disponiveis'],
    datasets: [{
      data: [nursery.confirmed, nursery.suspected, nursery.available],
      borderWidth: 1,
      backgroundColor: ['#2F4B26', '#3E885B', '#C0D7BB']
    }]
  };

  return (
    <ContainerCharts title="Ocupação dos Leitos Hospitalares(SUS e Privado)" rangeValues={{ active: false }} fonte="Nota: Ao realizar a contagem da ocupação hospitalar é considerado também os residentes de outros municípios internados em Chapecó-SC.">
      <Content>
        <Chart>
          <p>Leitos de UTI</p>
          <Pie
            options={{ legend: { labels: { fontColor: '#dedede' } } }}
            data={dataUti}
          />
          <span>Capacidade Total: <strong>{uti.total} leitos</strong></span>
          <span>Número ocupados: <strong>{uti.occupation} leitos</strong></span>
          <span>Porcentagem da Ocupação: <strong>{uti.po}%</strong></span>
        </Chart>
        <Chart>
          <p>Leitos de Enfermaria</p>
          <Pie
            options={{ legend: { labels: { fontColor: '#dedede' } } }}
            data={dataEnfermaria}
          />
          <span>Capacidade Total: <strong>{nursery.total} leitos</strong></span>
          <span>Número ocupados: <strong>{nursery.occupation} leitos</strong></span>
          <span>Porcentagem da Ocupação: <strong>{nursery.po}%</strong></span>
        </Chart>
      </Content>
    </ContainerCharts>
  );
};

HospitalOccupation.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default HospitalOccupation;
