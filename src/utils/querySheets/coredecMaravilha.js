import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
  {
    allGoogleSheetCovidCoredecMaravilhaRow(filter: {actives: {ne: 0}}, sort: {fields: date}) {
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
    allGoogleSheetConfirmadosCoredecMaravilhaRow(filter: {total: {ne: 0}}) {
      nodes {
        bomjesusdooeste
        caibi
        campoere
        cunhapora
        cunhatai
        flordosertao
        iraceminha
        maravilha
        modelo
        palmitos
        riqueza
        romelandia
        saltinho
        santaterrezinha
        saomiguel
        saudades
        tigrinhos
        data
      }
    }
    allGoogleSheetCuradosCoredecMaravilhaRow(filter: {total: {ne: 0}}) {
      nodes {
        bomjesusdooeste
        caibi
        campoere
        cunhapora
        cunhatai
        flordosertao
        iraceminha
        maravilha
        modelo
        palmitos
        riqueza
        romelandia
        saltinho
        santaterrezinha
        saomiguel
        saudades
        tigrinhos
        data
      }
    }
  }
  `);
  return JSON.stringify(data);
};

export default queries;
