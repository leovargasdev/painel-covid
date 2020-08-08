import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidXanxereRow(filter: {actives: {ne: 0}}, sort: {fields: date}) {
        nodes {
          confirmed
          deaths
          recovered
          suspected
          discarded
          date
          update
          actives
        }
      }
      flagImage: file(relativePath: { eq: "flags/xanxere.png" }) {
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
