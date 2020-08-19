import React from 'react';

import Layout from '~/components/Layout';
// import Covid from '~/components/Covid';

// import chapeco from '~/utils/querySheets/chapeco';
// import handleDataSheetsCovid from '~/utils/hooksSheets';

const CovidPage = () =>
// const {
//   allGoogleSheetCovidChapecoAgesRow: { nodes: agesCasesLines },
//   allGoogleSheetCovidChapecoRow: { nodes: covidSheet },
//   allGoogleSheetCovidChapecoHospitalRow: { nodes: hospitalCases },
//   googleSheetCovidChapecoAgesRow: agesCasesBar,
//   googleSheetCovidChapecoRow: statusCases,
//   allGoogleSheetCovidChapecoNeighborhoodsRow: { nodes: casesNeighborhoods },
//   flagImage
// } = JSON.parse(chapeco());

// const fonte = 'Vigilância Epidemiológica de Chapecó, 2020';
// const data = handleDataSheetsCovid({
//   agesCasesLines, covidSheet, agesCasesBar, statusCases, casesNeighborhoods, hospitalCases
// });

  (
    <Layout city="Chapecó" route="chapeco">
      <h2>olar</h2>
      {/* <Covid name="chapeco" data={data} flagImage={flagImage} xapPanel fonte={fonte} /> */}
    </Layout>
  );
export default CovidPage;
