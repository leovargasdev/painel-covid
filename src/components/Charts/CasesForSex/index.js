import React from 'react';
import PropTypes from 'prop-types';

import { Pie } from 'react-chartjs-2';

import ContainerCharts from '~/components/Charts/Container';

const CasesForSex = ({ fonte, data: { woman, man } }) => {
  const data = {
    labels: ['Masculino', 'Feminino'],
    datasets: [{
      data: [man, woman],
      borderWidth: 1,
      backgroundColor: ['#1164b4', '#f06aa4']
    }]
  };

  return (
    <ContainerCharts title="Casos Confirmados por Sexo" fonte={fonte}>
      <Pie data={data} />
    </ContainerCharts>
  );
};

CasesForSex.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  fonte: PropTypes.string.isRequired
};

export default CasesForSex;
