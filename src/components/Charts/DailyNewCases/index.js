import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'styled-components';

import options from '~/utils/configCharts';
import ContainerCharts from '~/components/Charts/Container';
import { Content } from './styles';

function DailyNewCases({ fonte, label, data: { confirmedPerDay, recoveredPerDay } }) {
  const theme = useTheme();
  const [numberRange, setNumberRange] = useState(10);

  const days = useMemo(() => confirmedPerDay.length - numberRange, [numberRange]);

  const data = {
    labels: label && label.slice(days),
    datasets: [
      {
        barPercentage: 0.9,
        label: 'Casos Confirmados',
        backgroundColor: 'rgb(153,153,153)',
        data: confirmedPerDay && confirmedPerDay.slice(days)
      },
      {
        barPercentage: 0.9,
        label: 'Casos Curados',
        backgroundColor: theme.greenDark,
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
