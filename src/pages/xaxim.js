import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { xaxim } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageXaxim = () => {
  const {
    allGoogleSheetCovidXaximRow: { nodes: covidSheet },
    flagImage
  } = JSON.parse(xaxim());

  const fonte = 'Vigilância Epidemiológica de Xaxim, 2020';

  const data = handleDataSimpleSheetsCovid({ covidSheet: covidSheet.slice(0, 108), statusCases: covidSheet[107] });

  return (
    <LayoutCovid city="Xaxim">
      <Covid name="xaxim" data={data} fonte={fonte} flagImage={flagImage} />
    </LayoutCovid>
  );
};

export default CovidPageXaxim;
