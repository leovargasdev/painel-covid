import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';

import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';
import oeste from '~/utils/querySheets/oeste';

const CovidPageOeste = () => {
  const {
    allGoogleSheetCovidCidadesOesteRow: { nodes: casesLocation },
    allGoogleSheetCovidOesteRow: { nodes: covidSheet },
    flagImage: { childImageSharp: { fluid: imageCity } }
  } = JSON.parse(oeste());

  const fonte = 'Coordenadorias Regionais de Defesa Civil, 2020';
  const statusCases = covidSheet[covidSheet.length - 1];
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <Layout city="Oeste Catarinense" route="oeste-catarinense">
      <Covid
        name="oeste"
        data={{ ...data, casesLocation }}
        fonte={fonte}
        image={imageCity}
        subtitle="Oeste Catarinense"
      />
    </Layout>
  );
};
export default CovidPageOeste;
