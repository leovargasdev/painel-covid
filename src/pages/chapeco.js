import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';
import {
  HospitalOccupation
} from '~/components/Charts';
import HeatMap from '~/components/HeatMap';
import chapeco from '~/utils/querySheets/chapeco';
import handleDataSheetsCovid from '~/utils/hooksSheets';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  ${media.lessThan('large')`
    padding: 0 5px;
  `}
`;

// const ChartsInRow = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: row;

//   ${media.lessThan('large')`
//     flex-direction: column;

//     div {
//       width: 100%!important;
//     }
//   `}
// `;

const CovidPage = () => {
  const {
    allGoogleSheetCovidChapecoAgesRow: { nodes: agesCasesLines },
    allGoogleSheetCovidChapecoRow: { nodes: covidSheet },
    googleSheetCovidChapecoAgesRow: agesCasesBar,
    googleSheetCovidChapecoRow: statusCases,
    allGoogleSheetCovidChapecoNeighborhoodsRow: { nodes: casesNeighborhoods }
  } = JSON.parse(chapeco());

  const fonte = 'Vigilância Epidemiológica de Chapecó, 2021';
  const data = handleDataSheetsCovid({
    agesCasesLines, covidSheet, agesCasesBar, statusCases, casesNeighborhoods
  });

  return (
    <Layout city="Chapecó" route="chapeco">
      <Covid name="Chapecó" route="chapeco" data={data} fonte={fonte} />
      <Content>
        <HospitalOccupation data={data.statusCases} fonte={fonte} />

        {/* <ChartsInRow>
          <div style={{ width: 500 }}>
            <CasesForSex data={data.statusCases} fonte={fonte} />
          </div>
          <CasesForAges data={data.agesCasesBar} fonte={fonte} />
        </ChartsInRow>

        <CasesForAgesLines data={data.agesCasesLines} fonte={fonte} /> */}
        <HeatMap lat={-27.0994261} lng={-52.6383303} zoom={12} data={data.casesNeighborhoods} />
      </Content>
    </Layout>
  );
};
export default CovidPage;
