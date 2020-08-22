import React from 'react';

import LayoutCovid from '~/components/Layout';
import Covid from '~/components/Covid';

import patoBranco from '~/utils/querySheets/patoBranco';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPagePatoBranco = () => {
  const {
    allGoogleSheetCovidPatoBrancoRow: { nodes: covidSheet },
    googleSheetCovidPatoBrancoRow: statusCases,
    flagImage: { childImageSharp: { fluid: imageCity } }
  } = JSON.parse(patoBranco());

  const fonte = 'Dados referentes aos Boletins Coronavírus de Pato Branco, 2020';
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <LayoutCovid city="Pato Branco" route="pato-branco">
      <Covid name="pato-branco" data={data} fonte={fonte} image={imageCity} subtitle="Pato Branco" />
    </LayoutCovid>
  );
};

export default CovidPagePatoBranco;
