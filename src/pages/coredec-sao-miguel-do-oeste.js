import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';
import { CasesForCities } from '~/components/Charts';

import coredecMiguel from '~/utils/querySheets/coredecMiguel';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecMiguel = () => {
  const {
    allGoogleSheetConfirmadosCoredecMiguelRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecMiguelRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecMiguelRow: { nodes: covidSheet }
  } = JSON.parse(coredecMiguel());

  const casesCities = {
    label: [
      'Anchieta',
      'Bandeirante',
      'Barra Bonita',
      'Belmonte',
      'Descanso',
      'Dionísio Cerqueira',
      'Guaraciaba',
      'Guarujá do Sul',
      'Iporã do Oeste',
      'Itapiranga',
      'Mondaí',
      'Palma Sola',
      'Paraíso',
      'Princesa',
      'Santa Helena',
      'São João do Oeste',
      'São José do Cedro',
      'São Miguel do Oeste',
      'Tunápolis'
    ],
    casesConfirmed: citiesConfirmed,
    casesRecovered: citiesRecovered
  };

  const statusCases = covidSheet[covidSheet.length - 1];
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });
  const fonte = 'Coordenadoria Regional da Defesa Civil de São Miguel, 2021';

  return (
    <Layout city="Coredec São Miguel do Oeste" route="coredec-sao-miguel-do-oeste">
      <Covid
        name="Coredec São Miguel do Oeste"
        route="coredec-sao-miguel-do-oeste"
        data={data}
        fonte={fonte}
      />
      <CasesForCities data={casesCities} fonte={fonte} />
    </Layout>
  );
};
export default CovidPageCoredecMiguel;
