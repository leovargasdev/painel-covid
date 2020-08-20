import { useStaticQuery, graphql } from 'gatsby';

// googleSheetCovidRow -> StatusCovid
// allGoogleSheetCovidRow -> TotalCases, DailyNewCases
// allGoogleSheetTypesCovidRow -> TypeCases, HospitalOccupation, CasesForSex
// googleSheetAgesCovidRow -> CasesForAges
// allGoogleSheetAgesCovidRow -> CasesForAgesLines

const queries = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCovidChapecoRow(sort: {fields: date}) {
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
      googleSheetCovidChapecoRow {
        actives
        deaths
        discarded
        recovered
        suspected
        woman
        man
      }
      allGoogleSheetCovidChapecoAgesRow(sort: {fields: date}) {
        nodes {
          range1
          range2
          range3
          range4
          range5
          range6
          range7
          range8
          date
        }
      }
      googleSheetCovidChapecoAgesRow {
        range1
        range2
        range3
        range4
        range5
        range6
        range7
        range8
      }
      allGoogleSheetCovidChapecoNeighborhoodsRow {
        nodes {
          cases
        }
      }
      allGoogleSheetCovidChapecoHospitalRow(limit: 2) {
        nodes {
          available
          confirmed
          occupation
          po
          suspected
          total
        }
      }
      flagImage: file(relativePath: { eq: "flags/chapeco.png" }) {
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
