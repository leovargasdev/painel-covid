import React from 'react';

import LayoutCovid from '~/components/Covid/Layout';
import Covid from '~/components/Covid';

import { coredecChapeco } from '~/utils/querySheets';
import handleDataSimpleSheetsCovid from '~/utils/hooksSheetsSimple';

const CovidPageCoredecChapeco = () => {
  const {
    allGoogleSheetConfirmadosCoredecChapecoRow: { nodes: citiesConfirmed },
    allGoogleSheetCuradosCoredecChapecoRow: { nodes: citiesRecovered },
    allGoogleSheetCovidCoredecChapecoRow: { nodes: covidSheet },
    flagImage
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
    <LayoutCovid city="Coredec Chapeco">
      <Covid
        name="coredec-chapeco"
        data={{ ...data, CasesForCities }}
        fonte="Coordenadoria Regional da Defesa Civil de Chapecó, 2020"
        flagImage={flagImage}
        subtitle="Coordenadoria Regional de Chapecó"
      />
    </LayoutCovid>
  );
};
export default CovidPageCoredecChapeco;
