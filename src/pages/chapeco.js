import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';

import chapeco from '~/utils/querySheets/chapeco';
import handleDataSheetsCovid from '~/utils/hooksSheets';

const CovidPage = () => {
  const {
    allGoogleSheetCovidChapecoAgesRow: { nodes: agesCasesLines },
    allGoogleSheetCovidChapecoRow: { nodes: covidSheet },
    allGoogleSheetCovidChapecoHospitalRow: { nodes: hospitalCases },
    googleSheetCovidChapecoAgesRow: agesCasesBar,
    googleSheetCovidChapecoRow: statusCases,
    allGoogleSheetCovidChapecoNeighborhoodsRow: { nodes: casesNeighborhoods }
  } = JSON.parse(chapeco());

  const fonte = 'Vigilância Epidemiológica de Chapecó, 2020';
  const data = handleDataSheetsCovid({
    agesCasesLines, covidSheet, agesCasesBar, statusCases, casesNeighborhoods, hospitalCases
  });

  return (
    <Layout city="Chapecó" route="chapeco">
      <Covid name="Chapecó" route="chapeco" data={data} xapPanel fonte={fonte} />
    </Layout>
  );
};
export default CovidPage;
