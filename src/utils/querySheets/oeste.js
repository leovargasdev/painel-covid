import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidOesteRow -> StatusCovid
// allGoogleSheetCovidOesteRow -> TotalCases, DailyNewCases
// allGoogleSheetCovidCidadesOesteRow -> LocationCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidOesteRow(filter: {actives: {gte: 800}}) {
        nodes {
          confirmed
          deaths
          recovered
          suspected
          discarded
          date
          actives
        }
      }
      allGoogleSheetCovidCidadesOesteRow {
        nodes {
          cases
        }
      }
      flagImage: file(relativePath: { eq: "flags/oeste.png" }) {
        childImageSharp {
          fluid(maxWidth: 230, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return JSON.stringify(data);
};

export default queries;
