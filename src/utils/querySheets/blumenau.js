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
    }
  `);
  return JSON.stringify(data);
};

export default queries;
