import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { FaUserInjured, FaCross, FaUser, FaUserClock } from 'react-icons/fa';

import { Container, Chart, RightPanel, ItemPanel } from './styles';
import colors from '~/styles/colors';

const StatusCovid = ({ data: { recovered, deaths, suspected, discarded, actives } }) => {
  const itemsPanel = useMemo(() => [
    {
      icon: <FaUserInjured />,
      value: recovered,
      legend: 'Curados',
      color: colors.recovered
    },
    {
      icon: <FaUser />,
      value: actives,
      legend: 'Ativos',
      color: colors.active
    },
    {
      icon: <FaUserClock />,
      value: suspected,
      legend: 'Suspeitos',
      color: colors.suspect
    },
    {
      icon: <FaCross />,
      value: deaths,
      legend: 'Óbitos',
      color: colors.death
    }
  ], [recovered, deaths, suspected, discarded, actives]);

  const data = {
    labels: ['Curados', 'Ativos', 'Suspeitos', 'Óbitos', 'Descartados'],
    datasets: [{
      data: [recovered, actives, suspected, deaths, discarded],
      borderWidth: 2,
      backgroundColor: [
        colors.recovered,
        colors.active,
        colors.suspect,
        colors.death,
        colors.discarded
      ]
    }]
  };

  return (
    <Container>
      <Chart>
        <Doughnut data={data} />
      </Chart>
      <RightPanel>
        {itemsPanel.map((item) => (
          <ItemPanel key={item.legend} color={item.color} case={item.legend}>
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
