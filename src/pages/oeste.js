import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';
import { oeste } from '~/utils/querySheets';

const CovidPageOeste = () => {
  const {
    allGoogleSheetCovidCidadesOesteRow: { nodes: casesLocation },
    allGoogleSheetCovidOesteRow: { nodes: covidSheet },
    flagImage
  } = JSON.parse(oeste());

  const fonte = 'Coordenadorias Regionais de Defesa Civil, 2020';
  const statusCases = covidSheet[covidSheet.length - 1];
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <LayoutCovid city="Oeste">
      <Covid
        name="oeste"
        data={{ ...data, casesLocation }}
        fonte={fonte}
        flagImage={flagImage}
        subtitle="Oeste Catarinense"
      />
    </LayoutCovid>
  );
};
export default CovidPageOeste;
