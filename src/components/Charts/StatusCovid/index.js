import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { FaUserInjured, FaCross, FaUser, FaUserSecret } from 'react-icons/fa';
import { useTheme } from 'styled-components';

import { Container, Chart, RightPanel, ItemPanel } from './styles';
// import colors from '~/styles/colors';

const StatusCovid = ({ data: { recovered, deaths, suspected, discarded, actives } }) => {
  const theme = useTheme();
  const itemsPanel = useMemo(() => [
    {
      icon: <FaUserInjured />,
      value: recovered,
      legend: 'Curados',
      color: theme.green
    },
    {
      icon: <FaUser />,
      value: actives,
      legend: 'Ativos',
      color: theme.red
    },
    {
      icon: <FaUserSecret />,
      value: suspected,
      legend: 'Suspeitos',
      color: theme.yellow
    },
    {
      icon: <FaCross />,
      value: deaths,
      legend: 'Óbitos',
      color: theme.purple
    }
  ], [recovered, deaths, suspected, discarded, actives]);

  const data = {
    labels: ['Curados', 'Ativos', 'Suspeitos', 'Óbitos', 'Descartados'],
    datasets: [{
      data: [recovered, actives, suspected, deaths, discarded],
      borderWidth: 2,
      backgroundColor: [
        theme.green,
        theme.red,
        theme.yellow,
        theme.purple,
        theme.blue
      ]
    }]
  };

  return (
    <Container>
      <Chart>
        <Doughnut data={data} options={{ legend: { labels: { fontColor: '#dedede' } } }} />
      </Chart>
      <RightPanel>
        {itemsPanel.map((item) => (
          <ItemPanel key={item.legend} color={item.color}>
            {item.icon}
            <div>
              <strong>{item.value}</strong>
              <span>{item.legend}</span>
            </div>
          </ItemPanel>
        ))}
      </RightPanel>
    </Container>
  );
};

StatusCovid.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default StatusCovid;
