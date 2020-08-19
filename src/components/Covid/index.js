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

const Covid = ({ name, data, flagImage, fonte, subtitle }) => (
  <Container>
    <Header name={name} date={data.lastUpdate} img={flagImage} subtitle={subtitle} />

    <StatusCovid data={data.statusCases} />

    <TotalCases label={data.label} data={data.cases} fonte={fonte} />

    <DailyNewCases label={data.label} data={data.cases} fonte={fonte} />

    {name === 'chapeco' && (
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
    {name === 'oeste'
      && <HeatMap lat={-26.7976155} lng={-53} zoom={9.3} data={data.casesLocation} />}
    {name.includes('coredec') && <CasesForCities data={data.CasesForCities} fonte={fonte} />}
  </Container>
);

Covid.defaultProps = {
  subtitle: ''
};

Covid.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  fonte: PropTypes.string.isRequired,
  flagImage: PropTypes.oneOfType([PropTypes.object]).isRequired,
  subtitle: PropTypes.string
};

export default Covid;
