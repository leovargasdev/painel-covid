import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';
import HeatMap from '~/components/HeatMap';

import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';
import oeste from '~/utils/querySheets/oeste';

const CovidPageOeste = () => {
  const {
    allGoogleSheetCovidCidadesOesteRow: { nodes: casesLocation },
    allGoogleSheetCovidOesteRow: { nodes: covidSheet }
  } = JSON.parse(oeste());

  const fonte = 'Coordenadorias Regionais de Defesa Civil, 2020';
  const statusCases = covidSheet[covidSheet.length - 1];
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <Layout city="Oeste Catarinense" route="oeste-catarinense">
      <Covid
        name="Oeste Catarinense"
        route="oeste-catarinense"
        data={{ ...data }}
        fonte={fonte}
      />
      <HeatMap lat={-26.7976155} lng={-53} zoom={9.3} data={casesLocation} />
    </Layout>
  );
};
export default CovidPageOeste;
