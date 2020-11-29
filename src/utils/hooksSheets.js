import { format, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const handleDataSheetCovid = (rows) => {
  const confirmeds = [];
  const actives = [];
  const suspecteds = [];
  const recovereds = [];
  const deaths = [];
  const confirmedPerDay = [];
  const recoveredPerDay = [];
  const label = [];

  rows.forEach((row, index) => {
    suspecteds.push(row.suspected);
    confirmeds.push(row.confirmed);
    recovereds.push(row.recovered);
    actives.push(row.actives);
    deaths.push(row.deaths);

    confirmedPerDay.push(index ? row.confirmed - confirmeds[index - 1] : row.confirmed);

    recoveredPerDay.push(index ? row.recovered - rows[index - 1].recovered : row.recovered);

    label.push(format(new Date(row.date), 'MMM dd', {
      locale: pt
    }));
  });

  return {
    label,
    cases: { confirmeds, actives, suspecteds, recovereds, deaths, confirmedPerDay, recoveredPerDay }
  };
};

const handleDataSheetAgesCovid = (rows) => {
  const ages = ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '+70'];
  const colors = [
    '#D1BF75',
    '#ED474A',
    '#1a659e',
    '#FF6600',
    '#FFF',
    '#2C666E',
    '#008000',
    '#7F00FF'
  ];
  const labels = [];
  const ranges = [[], [], [], [], [], [], [], []];

  rows.forEach((row) => {
    ranges[0].push(row.range1);
    ranges[1].push(row.range2);
    ranges[2].push(row.range3);
    ranges[3].push(row.range4);
    ranges[4].push(row.range5);
    ranges[5].push(row.range6);
    ranges[6].push(row.range7);
    ranges[7].push(row.range8);

    labels.push(format(new Date(row.date), 'MMM dd', {
      locale: pt
    }));
  });

  const datasets = ranges.map((range, index) => ({
    fill: 'origin',
    label: ages[index],
    backgroundColor: 'rgba(0,0,0,0.07)',
    borderColor: colors[index],
    borderJoinStyle: 'miter', // Forma das curvas
    pointBorderColor: colors[index],
    pointBorderWidth: 1,
    pointHoverRadius: 3,
    pointHoverBackgroundColor: colors[index],
    pointRadius: 1,
    pointHitRadius: 10,
    data: range
  }));

  return { labels, datasets };
};

const handleLastUpdateSheets = ({ update, date }) => {
  const formatDate = format(addDays(new Date(date), 1), "dd' de 'MMMM' de 'yyyy'", { locale: pt });

  return `${formatDate}, às ${update.replace(':', 'h')}min`;
};
const handleDataSheetsCovid = ({
  agesCasesLines,
  covidSheet,
  agesCasesBar,
  statusCases,
  casesNeighborhoods
}) => {
  const { label, cases } = handleDataSheetCovid(covidSheet);
  return {
    label,
    cases,
    lastUpdate: handleLastUpdateSheets(covidSheet[covidSheet.length - 1]),
    statusCases,
    agesCasesBar,
    agesCasesLines: handleDataSheetAgesCovid(agesCasesLines),
    casesNeighborhoods
  };
};

export default handleDataSheetsCovid;
