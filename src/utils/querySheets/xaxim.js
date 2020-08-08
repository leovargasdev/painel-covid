import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidXaximRow(filter: {actives: {ne: 0}}, sort: {fields: date}) {
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
      flagImage: file(relativePath: { eq: "flags/xaxim.png" }) {
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
