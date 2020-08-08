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
          bomjesus
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
        }
      }
      allGoogleSheetCuradosCoredecMaravilhaRow(filter: {total: {ne: 0}}) {
        nodes {
          bomjesus
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
        }
      }
      flagImage: file(relativePath: { eq: "cigerd.png" }) {
        childImageSharp {
          fixed(height: 130, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return JSON.stringify(data);
};

export default queries;
