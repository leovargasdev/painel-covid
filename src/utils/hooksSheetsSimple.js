import { format, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const handleDataSheetCovid = (rows) => {
  const confirmeds = [];
  const actives = [];
  const suspecteds = [];
  const recovereds = [];
  const confirmedPerDay = [];
  const recoveredPerDay = [];
  const label = [];

  rows.forEach((row, index) => {
    suspecteds.push(row.suspected);
    confirmeds.push(row.confirmed);
    recovereds.push(row.recovered);
    actives.push(row.actives);

    confirmedPerDay.push(index ? row.confirmed - confirmeds[index - 1] : row.confirmed);

    recoveredPerDay.push(index ? row.recovered - rows[index - 1].recovered : row.recovered);

    label.push(format(new Date(row.date), 'MMM dd', {
      locale: pt
    }));
  });

  return {
    label,
    cases: { confirmeds, actives, suspecteds, recovereds, confirmedPerDay, recoveredPerDay }
  };
};

const handleLastUpdateSheets = ({ update = false, date }) => {
  const formatDate = format(addDays(new Date(date), 1), "dd' de 'MMMM' de 'yyyy'", { locale: pt });

  return `${formatDate}, às ${update ? update.replace(':', 'h') : '16:00'}min`;
};

const handleDataSimpleSheetsCovid = ({ covidSheet, statusCases }) => {
  const { label, cases } = handleDataSheetCovid(covidSheet);
  return {
    label,
    cases,
    lastUpdate: handleLastUpdateSheets(covidSheet[covidSheet.length - 1]),
    statusCases
  };
};

export default handleDataSimpleSheetsCovid;
