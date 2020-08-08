import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { chapeco } from '~/utils/querySheets';
import handleDataSheetsCovid from '~/utils/hooksSheets';

const CovidPage = () => {
  const {
    allGoogleSheetCovidChapecoAgesRow: { nodes: agesCasesLines },
    allGoogleSheetCovidChapecoRow: { nodes: covidSheet },
    allGoogleSheetCovidChapecoHospitalRow: { nodes: hospitalCases },
    googleSheetCovidChapecoAgesRow: agesCasesBar,
    googleSheetCovidChapecoRow: statusCases,
    allGoogleSheetCovidChapecoNeighborhoodsRow: { nodes: casesNeighborhoods },
    flagImage
  } = JSON.parse(chapeco());

  const fonte = 'Vigilância Epidemiológica de Chapecó, 2020';
  const data = handleDataSheetsCovid({
    agesCasesLines, covidSheet, agesCasesBar, statusCases, casesNeighborhoods, hospitalCases
  });

  return (
    <LayoutCovid city="Chapecó">
      <Covid name="chapeco" data={data} flagImage={flagImage} xapPanel fonte={fonte} />
    </LayoutCovid>
  );
};

export default CovidPage;
