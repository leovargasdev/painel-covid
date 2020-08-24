import React from 'react';
import PropTypes from 'prop-types';

import { StatusCovid, TotalCases, DailyNewCases } from '~/components/Charts';

import Header from './Header';

import { Container } from './styles';

const Covid = ({ name, route, data, fonte }) => (
  <Container>

    <Header route={route} dateUpdate={data.lastUpdate} name={name} />

    <StatusCovid data={data.statusCases} />

    <TotalCases label={data.label} data={data.cases} fonte={fonte} />

    <DailyNewCases label={data.label} data={data.cases} fonte={fonte} />

  </Container>
);

Covid.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  route: PropTypes.string.isRequired,
  fonte: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Covid;
