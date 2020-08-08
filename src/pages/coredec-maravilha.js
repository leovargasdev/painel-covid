import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { coredecMaravilha } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecMaravilha = () => {
  const {
    allGoogleSheetConfirmadosCoredecMaravilhaRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecMaravilhaRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecMaravilhaRow: { nodes: covidSheet },
    flagImage
  } = JSON.parse(coredecMaravilha());

  const CasesForCities = {
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

  return (
    <LayoutCovid city="Coredec Maravilha">
      <Covid
        name="coredec-maravilha"
        data={{ ...data, CasesForCities }}
        fonte="Coordenadoria Regional da Defesa Civil de Maravilha, 2020"
        flagImage={flagImage}
        subtitle="Coordenadoria Regional de Maravilha"
      />
    </LayoutCovid>
  );
};
export default CovidPageCoredecMaravilha;
