import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidCoredecChapecoRow(filter: {actives: {ne: 0}}, sort: {fields: date}) {
        nodes {
          date
          suspected
          discarded
          confirmed
          recovered
          deaths
          actives
        }
      }
      allGoogleSheetConfirmadosCoredecChapecoRow(filter: {total: {ne: 0}}) {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          chapeco
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
          jardinopolis
          novaerechim
          novaitaberaba
          paial
          pinhalzinho
          planaltoalegre
          quilombo
          santiagodosul
          saocarlos
          serraalta
          sulbrasil
          uniaodooeste
        }
      }
      allGoogleSheetCuradosCoredecChapecoRow(filter: {total: {ne: 0}}) {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          chapeco
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
          jardinopolis
          novaerechim
          novaitaberaba
          paial
          pinhalzinho
          planaltoalegre
          quilombo
          santiagodosul
          saocarlos
          serraalta
          sulbrasil
          uniaodooeste
        }
      }
    }
  `);
  return JSON.stringify(data);
};

export default queries;
