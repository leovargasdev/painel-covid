import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidPatoBrancoRow(sort: {fields: date}) {
        nodes {
          confirmed
          deaths
          recovered
          suspected
          date
          update
          actives
        }
      }
      googleSheetCovidPatoBrancoRow {
        actives
        deaths
        discarded
        recovered
        suspected
      }
      flagImage: file(relativePath: { eq: "flags/pato-branco.png" }) {
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
