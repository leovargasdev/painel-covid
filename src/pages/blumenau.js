import React from 'react';

import LayoutCovid from '~/components/Layout';
import Covid from '~/components/Covid';

import blumenau from '~/utils/querySheets/blumenau';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageBlumenau = () => {
  const {
    allGoogleSheetCovidBlumenauRow: { nodes: covidSheet },
    googleSheetCovidBlumenauRow: statusCases,
    flagImage
  } = JSON.parse(blumenau());

  const fonte = 'Dados referentes aos Boletins Coronavírus de Blumenau, 2020';
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <LayoutCovid city="Blumenau" route="blumenau">
      <Covid name="blumenau" data={data} fonte={fonte} flagImage={flagImage} />
    </LayoutCovid>
  );
};

export default CovidPageBlumenau;
