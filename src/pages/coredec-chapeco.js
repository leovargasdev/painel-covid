import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';
import { CasesForCities } from '~/components/Charts';

import coredecChapeco from '~/utils/querySheets/coredecChapeco';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecChapeco = () => {
  const {
    allGoogleSheetConfirmadosCoredecChapecoRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecChapecoRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecChapecoRow: { nodes: covidSheet }
  } = JSON.parse(coredecChapeco());

  const casesCities = {
    label: [
      'Águas de Chapecó',
      'Águas Frias',
      'Arvoredo',
      'Caxambu do Sul',
      'Chapecó',
      'Cordilheira Alta',
      'Coronel Freitas',
      'Formosa do Sul',
      'Guatambu',
      'Irati',
      'Jardinópolis',
      'Nova Erechim',
      'Nova Itaberaba',
      'Paial',
      'Pinhalzinho',
      'Planalto Alegre',
      'Quilombo',
      'Santiago do Sul',
      'São Carlos',
      'Serra Alta',
      'Sul Brasil',
      'União do Oeste'
    ],
    casesConfirmed: citiesConfirmed,
    casesRecovered: citiesRecovered
  };

  const statusCases = covidSheet[covidSheet.length - 1];
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });
  const fonte = 'Coordenadoria Regional da Defesa Civil de Chapecó, 2020';

  return (
    <Layout city="Coredec Chapecó" route="coredec-chapeco">
      <Covid
        name="Coredec de Chapecó"
        route="coredec-chapeco"
        data={data}
        fonte={fonte}
      />
      <CasesForCities data={casesCities} fonte={fonte} />
    </Layout>
  );
};
export default CovidPageCoredecChapeco;
