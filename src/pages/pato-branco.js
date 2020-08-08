import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { patoBranco } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPagePatoBranco = () => {
  const {
    allGoogleSheetCovidPatoBrancoRow: { nodes: covidSheet },
    googleSheetCovidPatoBrancoRow: statusCases,
    flagImage
  } = JSON.parse(patoBranco());

  const fonte = 'Dados referentes aos Boletins Coronavírus de Pato Branco, 2020';
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <LayoutCovid city="Pato Branco">
      <Covid name="pato-branco" data={data} fonte={fonte} flagImage={flagImage} />
    </LayoutCovid>
  );
};

export default CovidPagePatoBranco;
