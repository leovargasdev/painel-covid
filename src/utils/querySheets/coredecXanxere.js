import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidCoredecXanxereRow(filter: {actives: {ne: 0}}, sort: {fields: date}) {
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
      allGoogleSheetConfirmadosCoredecXanxereRow(filter: {totalgeral: {ne: 0}}) {
        nodes {
          abelardoluz
          bomjesus
          coronelmartins
          entrerios
          faxinaldosguedes
          galvao
          ipuacu
          jupia
          lajeadogrande
          marema
          novohorizonte
          ouroverde
          passosmaia
          ponteserrada
          saobernardino
          saodomingos
          saolourencodooeste
          vargeao
          xanxere
          xaxim
        }
      }
      allGoogleSheetCuradosCoredecXanxereRow(filter: {totalgeral: {ne: 0}}){
        nodes {
          abelardoluz
          bomjesus
          coronelmartins
          entrerios
          faxinaldosguedes
          galvao
          ipuacu
          jupia
          lajeadogrande
          marema
          novohorizonte
          ouroverde
          passosmaia
          ponteserrada
          saobernardino
          saodomingos
          saolourencodooeste
          vargeao
          xanxere
          xaxim
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
