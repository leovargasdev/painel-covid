import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { coredecMiguel } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecMiguel = () => {
  const {
    allGoogleSheetConfirmadosCoredecMiguelRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecMiguelRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecMiguelRow: { nodes: covidSheet },
    flagImage
  } = JSON.parse(coredecMiguel());
  const CasesForCities = {
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

  return (
    <LayoutCovid city="Coredec São Miguel do Oeste">
      <Covid
        name="coredec-miguel"
        data={{ ...data, CasesForCities }}
        fonte="Coordenadoria Regional da Defesa Civil de São Miguel do Oeste, 2020"
        flagImage={flagImage}
        subtitle="Coordenadoria Regional de São Miguel do Oeste"
      />
    </LayoutCovid>
  );
};
export default CovidPageCoredecMiguel;
