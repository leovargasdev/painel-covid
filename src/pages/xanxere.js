import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { xanxere } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageXanxere = () => {
  const {
    allGoogleSheetCovidXanxereRow: { nodes: covidSheet },
    flagImage
  } = JSON.parse(xanxere());

  const fonte = 'Vigilância Epidemiológica de Xanxerê, 2020';
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases: covidSheet[covidSheet.length - 1] });

  return (
    <LayoutCovid city="Xanxerê">
      <Covid name="xanxere" data={data} fonte={fonte} flagImage={flagImage} />
    </LayoutCovid>
  );
};

export default CovidPageXanxere;
