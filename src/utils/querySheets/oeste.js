import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidOesteRow -> StatusCovid
// allGoogleSheetCovidOesteRow -> TotalCases, DailyNewCases
// allGoogleSheetCovidCidadesOesteRow -> LocationCases

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidOesteRow(filter: {actives: {gte: 400}}) {
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
    }
  `);
  return JSON.stringify(data);
};

export default queries;
