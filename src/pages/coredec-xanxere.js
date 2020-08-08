import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { coredecXanxere } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecXanxere = () => {
  const {
    allGoogleSheetConfirmadosCoredecXanxereRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecXanxereRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecXanxereRow: { nodes: covidSheet },
    flagImage
  } = JSON.parse(coredecXanxere());
  const CasesForCities = {
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

  const statusCases = { ...covidSheet[covidSheet.length - 1], update: '19:00' };
  const data = handleDataSimpleSheetsCovid({ covidSheet, statusCases });

  return (
    <LayoutCovid city="Coredec Xanxerê">
      <Covid
        name="coredec-xanxere"
        data={{ ...data, CasesForCities }}
        fonte="Coordenadoria Regional da Defesa Civil de Xanxerê, 2020"
        flagImage={flagImage}
        subtitle="Coordenadoria Regional de Xanxerê"
      />
    </LayoutCovid>
  );
};
export default CovidPageCoredecXanxere;
