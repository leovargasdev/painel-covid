import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';

import coredecChapeco from '~/utils/querySheets/coredecChapeco';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecChapeco = () => {
  const {
    allGoogleSheetConfirmadosCoredecChapecoRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecChapecoRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecChapecoRow: { nodes: covidSheet }
  } = JSON.parse(coredecChapeco());

  const CasesForCities = {
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

  return (
    <Layout city="Coredec Chapecó" route="coredec-chapeco">
      <Covid
        name="Coordenadoria Regional de Chapecó"
        route="coredec-chapeco"
        data={{ ...data, CasesForCities }}
        fonte="Coordenadoria Regional da Defesa Civil de Chapecó, 2020"
      />
    </Layout>
  );
};
export default CovidPageCoredecChapeco;
