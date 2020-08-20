import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidBlumenauRow(sort: {fields: date}) {
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
      googleSheetCovidBlumenauRow {
        actives
        deaths
        discarded
        recovered
        suspected
      }
      flagImage: file(relativePath: { eq: "flags/blumenau.png" }) {
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
