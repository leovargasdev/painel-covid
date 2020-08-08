import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { novaTebas } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageNovaTebas = () => {
  const {
    allGoogleSheetCovidNovaTebasRow: { nodes: covidSheet },
    googleSheetCovidNovaTebasRow: statusCases,
    flagImage
  } = JSON.parse(novaTebas());

  const fonte = 'Dados referentes aos Boletins Coronavírus de Nova Tebas, 2020';
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <LayoutCovid city="Nova Tebas">
      <Covid name="nova-tebas" data={data} fonte={fonte} flagImage={flagImage} />
    </LayoutCovid>
  );
};

export default CovidPageNovaTebas;
