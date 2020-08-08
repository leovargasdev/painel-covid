import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

import options from '~/utils/configCharts';
import ContainerCharts from '~/components/Charts/Container';
import colors from '~/styles/colors';
import { Content } from './styles';

function CasesForCities({ fonte, data: { label, casesConfirmed, casesRecovered } }) {
  const [rangeConfirmed, setRangeConfirmed] = useState(casesConfirmed.length - 1);
  const rangeValuesConfirmed = { active: true, max: casesConfirmed.length - 1, numberRange: rangeConfirmed, setNumberRange: setRangeConfirmed };

  const data = {
    labels: label,
    datasets: [
      {
        barPercentage: 0.9,
        label: 'Casos Confirmados',
        backgroundColor: 'rgba(153,153,153,0.6)',
        borderColor: 'rgb(153,153,153)',
        borderWidth: 1,
        data: casesConfirmed && Object.values(casesConfirmed[rangeConfirmed])
      }
    ]
  };

  const [rangeRecovered, setRangeRecovered] = useState(casesRecovered.length - 1);
  const rangeValuesRecovered = {
    active: true, max: casesRecovered.length - 1, numberRange: rangeRecovered, setNumberRange: setRangeRecovered
  };

  const dataRecovered = {
    labels: label,
    datasets: [
      {
        barPercentage: 0.9,
        label: 'Casos Curados',
        backgroundColor: colors.recovered,
        borderWidth: 1,
        data: casesRecovered && Object.values(casesRecovered[rangeRecovered])
      }
    ]
  };

  return (
    <>
      <ContainerCharts title="Acumulado de casos confirmados de COVID-19 por cidade" rangeValues={rangeValuesConfirmed} fonte={fonte}>
        <Content>
          <Bar
            data={data}
            options={{
              ...options,
              title: {
                text: 'Número Total de Casos',
                ...options.title
              },
              animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
              }
            }}
          />
        </Content>
      </ContainerCharts>
      <ContainerCharts title="Acumulado de casos curados de COVID-19 por cidade" rangeValues={rangeValuesRecovered} fonte={fonte}>
        <Content>
          <Bar
            data={dataRecovered}
            options={{
              ...options,
              title: {
                text: 'Número Total de Casos Curados',
                ...options.title
              },
              animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
              }
            }}
          />
        </Content>
      </ContainerCharts>
    </>
  );
}

CasesForCities.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  fonte: PropTypes.string.isRequired
};

export default CasesForCities;
