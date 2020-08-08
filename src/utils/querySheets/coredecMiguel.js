import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidCoredecMiguelRow(filter: {actives: {ne: 0}}, sort: {fields: date}) {
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
      allGoogleSheetConfirmadosCoredecMiguelRow(filter: {total: {ne: 0}}) {
        nodes {
          anchieta
          bandeirantes
          barrabonita
          belmonte
          descanso
          dionisio
          guaraciaba
          guarujadosul
          ipora
          itapiranga
          mondai
          palmasola
          paraiso
          princesa
          santahelena
          saojoaodooeste
          saojosedocedro
          saomigueldooeste
          tunapolis
        }
      }
      allGoogleSheetCuradosCoredecMiguelRow(filter: {total: {ne: 0}}){
        nodes {
          anchieta
          bandeirantes
          barrabonita
          belmonte
          descanso
          dionisio
          guaraciaba
          guarujadosul
          ipora
          itapiranga
          mondai
          palmasola
          paraiso
          princesa
          santahelena
          saojoaodooeste
          saojosedocedro
          saomigueldooeste
          tunapolis
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
