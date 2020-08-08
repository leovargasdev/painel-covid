import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

import options from '~/utils/configCharts';
import colors from '~/styles/colors';
import ContainerCharts from '~/components/Charts/Container';
import { Content } from './styles';

function DailyNewCases({ fonte, label, data: { confirmedPerDay, recoveredPerDay } }) {
  const [numberRange, setNumberRange] = useState(10);

  const days = useMemo(() => confirmedPerDay.length - numberRange, [numberRange]);

  const data = {
    labels: label && label.slice(days),
    datasets: [
      {
        barPercentage: 0.9,
        label: 'Casos Confirmados',
        backgroundColor: 'rgba(153,153,153,0.6)',
        borderColor: 'rgb(153,153,153)',
        borderWidth: 1,
        data: confirmedPerDay && confirmedPerDay.slice(days)
      },
      {
        barPercentage: 0.9,
        label: 'Casos Curados',
        backgroundColor: colors.recovered,
        data: recoveredPerDay && recoveredPerDay.slice(days)
      }
    ]
  };

  const rangeValues = {
    active: true, max: confirmedPerDay.length - 1, numberRange, setNumberRange
  };

  return (
    <ContainerCharts title="Novos casos confirmados e curados de COVID-19 por dia" rangeValues={rangeValues} fonte={fonte}>
      <Content>
        <Bar
          data={data}
          options={{
            ...options,
            title: {
              text: 'Número Total de Casos por Dia',
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
  );
}

DailyNewCases.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  fonte: PropTypes.string.isRequired
};

export default DailyNewCases;
