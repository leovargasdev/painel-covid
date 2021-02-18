import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';
import { CasesForCities } from '~/components/Charts';

import coredecMaravilha from '~/utils/querySheets/coredecMaravilha';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecMaravilha = () => {
  const {
    allGoogleSheetConfirmadosCoredecMaravilhaRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecMaravilhaRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecMaravilhaRow: { nodes: covidSheet }
  } = JSON.parse(coredecMaravilha());

  const casesCities = {
    label: [
      'Bom Jesus do Oeste',
      'Caibi',
      'Campo Erê',
      'Cunha Porã',
      'Cunhataí',
      'Flor do Sertão',
      'Iraceminha',
      'Maravilha',
      'Modelo',
      'Palmitos',
      'Riqueza',
      'Romelândia',
      'Saltinho',
      'Santa Terezinha do Progresso',
      'São Miguel da Boa Vista',
      'Saudades',
      'Tigrinhos'
    ],
    casesConfirmed: citiesConfirmed,
    casesRecovered: citiesRecovered
  };

  const statusCases = covidSheet[covidSheet.length - 1];
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });
  const fonte = 'Coordenadoria Regional da Defesa Civil de Maravilha, 2021';

  return (
    <Layout city="Coredec Maravilha" route="coredec-maravilha">
      <Covid
        name="Coredec de Maravilha"
        route="coredec-maravilha"
        data={data}
        fonte={fonte}
      />
      <CasesForCities data={casesCities} fonte={fonte} />
    </Layout>
  );
};
export default CovidPageCoredecMaravilha;
