import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusCovid,
  TotalCases,
  DailyNewCases,
  CasesForAges,
  CasesForAgesLines,
  HospitalOccupation,
  CasesForSex,
  CasesForCities
} from '~/components/Charts';

import HeatMap from '~/components/HeatMap';
import Header from './Header';

import { Container, ChartsInRow } from './styles';

const Covid = ({ name, route, data, fonte }) => (
  <Container>
    <Header route={route} dateUpdate={data.lastUpdate} name={name} />

    <StatusCovid data={data.statusCases} />

    <TotalCases label={data.label} data={data.cases} fonte={fonte} />

    <DailyNewCases label={data.label} data={data.cases} fonte={fonte} />

    {route === 'chapeco' && (
      <>
        <HospitalOccupation data={data.hospitalOccupation} />

        <ChartsInRow>
          <div style={{ width: 500 }}>
            <CasesForSex data={data.statusCases} fonte={fonte} />
          </div>
          <CasesForAges data={data.agesCasesBar} fonte={fonte} />
        </ChartsInRow>

        <CasesForAgesLines data={data.agesCasesLines} fonte={fonte} />
        <HeatMap lat={-27.0994261} lng={-52.6383303} zoom={12} data={data.casesNeighborhoods} />
      </>
    )}
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
