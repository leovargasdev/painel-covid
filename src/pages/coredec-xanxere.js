import React from 'react';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';
import { CasesForCities } from '~/components/Charts';

import coredecXanxere from '~/utils/querySheets/coredecXanxere';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecXanxere = () => {
  const {
    allGoogleSheetConfirmadosCoredecXanxereRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecXanxereRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecXanxereRow: { nodes: covidSheet }
  } = JSON.parse(coredecXanxere());

  const casesCities = {
    label: [
      'Abelardo Luz',
      'Bom Jesus',
      'Coronel Martins',
      'Entre Rios',
      'Faxinal dos Guedes',
      'Galvão',
      'Ipuaçu',
      'Jupiá',
      'Lajeado Grande',
      'Marema',
      'Novo Horizonte',
      'Ouro Verde',
      'Passos Maia',
      'Ponte Serrada',
      'São Bernardino',
      'São Domingos',
      'São Lourenço do Oeste',
      'Vargeão',
      'Xanxerê',
      'Xaxim'
    ],
    casesConfirmed: citiesConfirmed,
    casesRecovered: citiesRecovered
  };

  const statusCases = covidSheet[covidSheet.length - 1];
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });
  const fonte = 'Coordenadoria Regional da Defesa Civil de Xanxerê, 2021';

  return (
    <Layout city="Coredec Xanxerê" route="coredec-xanxere">
      <Covid
        name="Coredec de Xanxere"
        route="coredec-xanxere"
        data={data}
        fonte={fonte}
      />
      <CasesForCities data={casesCities} fonte={fonte} />
    </Layout>
  );
};
export default CovidPageCoredecXanxere;
