import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'styled-components';

import options from '~/utils/configCharts';
import ContainerCharts from '~/components/Charts/Container';
import { Content } from './styles';

function TotalCases({ fonte, label, data: { actives, suspecteds, recovereds } }) {
  const theme = useTheme();
  const [numberRange, setNumberRange] = useState(18);

  const days = useMemo(() => actives.length - numberRange, [numberRange]);

  const data = {
    labels: label && label.slice(days),
    datasets: [
      {
        fill: 'origin',
        label: 'Casos Ativos',
        backgroundColor: 'rgba(219,22,47,0.1)',
        borderColor: theme.red,
        borderJoinStyle: 'miter', // Forma das curvas
        pointBorderColor: theme.red,
        pointBorderWidth: 1,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: theme.red,
        pointRadius: 1,
        pointHitRadius: 10,
        data: actives && actives.slice(days)
      },
      {
        fill: 'origin',
        label: 'Casos Curados',
        backgroundColor: 'rgba(43,157,143,0.3)',
        borderColor: theme.green,
        borderJoinStyle: 'miter', // Forma das curvas
        pointBorderColor: theme.green,
        pointBorderWidth: 1,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: theme.green,
        pointRadius: 1,
        pointHitRadius: 10,
        data: recovereds && recovereds.slice(days)
      },
      {
        fill: 'origin',
        label: 'Casos Suspeitos',
        backgroundColor: 'rgba(250,187,37,0.2)',
        borderColor: theme.yellow,
        borderJoinStyle: 'miter', // Forma das curvas
        pointBorderColor: theme.yellow,
        pointBorderWidth: 1,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: theme.yellow,
        pointRadius: 1,
        pointHitRadius: 10,
        data: suspecteds && suspecteds.slice(days)
      }
    ]
  };

  const rangeValues = { active: true, max: actives.length, numberRange, setNumberRange };

  return (
    <ContainerCharts title="Acumulado de casos ativos, curados e suspeitos por dia" rangeValues={rangeValues} fonte={fonte}>
      <Content>
        <Line
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
  );
}

TotalCases.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  fonte: PropTypes.string.isRequired
};

export default TotalCases;
