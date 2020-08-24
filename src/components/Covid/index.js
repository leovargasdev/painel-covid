import React from 'react';
import PropTypes from 'prop-types';

import {
  StatusCovid,
  TotalCases,
  DailyNewCases,
  CasesForCities
} from '~/components/Charts';
import HeatMap from '~/components/HeatMap';
import Header from './Header';

import { Container } from './styles';

const Covid = ({ name, route, data, fonte }) => (
  <Container>
    <Header route={route} dateUpdate={data.lastUpdate} name={name} />

    <StatusCovid data={data.statusCases} />

    <TotalCases label={data.label} data={data.cases} fonte={fonte} />

    <DailyNewCases label={data.label} data={data.cases} fonte={fonte} />

    {route === 'oeste-catarinense'
      && <HeatMap lat={-26.7976155} lng={-53} zoom={9.3} data={data.casesLocation} />}
    {route.includes('coredec') && <CasesForCities data={data.CasesForCities} fonte={fonte} />}
  </Container>
);

Covid.defaultProps = {
  name: ''
};

Covid.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  route: PropTypes.string.isRequired,
  fonte: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Covid;
