const { format, addDays } = require('date-fns');
const ptBr = require('date-fns/locale/pt-BR');

const handleDataSheetCovid = (cities, { confirmeds,
  recovereds,
  suspecteds,
  deaths }, data) => {
  for (let k = 0; k < confirmeds.length - 1; k += 1) {
    cities.forEach((city, index) => {
      data[index].cases.suspecteds.push(suspecteds[k][city]);
      data[index].cases.confirmeds.push(confirmeds[k][city]);
      data[index].cases.recovereds.push(recovereds[k][city]);

      const active = confirmeds[k][city] - (recovereds[k][city] + deaths[k][city]);
      data[index].cases.actives.push(active);

      data[index].cases.confirmedPerDay.push(
        k ? confirmeds[k][city] - confirmeds[k - 1][city] : confirmeds[k][city]
      );
      data[index].cases.recoveredPerDay.push(
        k ? recovereds[k][city] - recovereds[k - 1][city] : recovereds[k][city]
      );
    });
  }
};

const handleLabelCharts = (maxValue, initialDate) => {
  const firstDate = new Date(initialDate);
  const label = [];
  for (let i = 0; i < maxValue; i += 1) {
    label.push(format(addDays(firstDate, i), 'MMM dd', {
      locale: ptBr
    }));
  }
  return label;
};

const handleDataSheetsCovid = (cases, initialDate) => {
  const cities = Object.keys(cases.confirmeds[0]);
  const LAST_ITEM_DATA = cases.confirmeds.length - 1;

  const labels = handleLabelCharts(LAST_ITEM_DATA, initialDate);

  const data = cities.map((city) => ({
    city,
    cases: {
      confirmeds: [],
      actives: [],
      suspecteds: [],
      recovereds: [],
      confirmedPerDay: [],
      recoveredPerDay: []
    },
    statusCases: {
      actives:
        cases.confirmeds[LAST_ITEM_DATA][city]
        - (cases.recovereds[LAST_ITEM_DATA][city] + cases.deaths[LAST_ITEM_DATA][city]),
      deaths: cases.deaths[LAST_ITEM_DATA][city],
      discarded: cases.discardeds[LAST_ITEM_DATA][city],
      recovered: cases.recovereds[LAST_ITEM_DATA][city],
      suspected: cases.suspecteds[LAST_ITEM_DATA][city]
    }
  }));

  handleDataSheetCovid(cities, cases, data);

  return { data, labels, lastUpdate: format(addDays(new Date(initialDate), LAST_ITEM_DATA), "dd' de 'MMMM' de 'yyyy'", { locale: ptBr }) };
};

module.exports = {
  handleDataSheetsCovid
};
