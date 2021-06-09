/* eslint-disable max-len */
const { format, addDays } = require('date-fns');
const pt = require('date-fns/locale/pt');

const handleDataSheetCovid = (cases, lastValue) => {
  const { confirmeds, recovereds, deaths } = cases;
  const cities = Object.keys(confirmeds[0]);

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
        confirmeds[lastValue][city]
        - (recovereds[lastValue][city] + deaths[lastValue][city]),
      deaths: deaths[lastValue][city],
      discarded: 0,
      recovered: recovereds[lastValue][city],
      suspected: 0
    }
  }));

  for (let value = 0; value < lastValue; value += 1) {
    cities.forEach((city, index) => {
      data[index].cases.suspecteds.push(0);
      data[index].cases.confirmeds.push(confirmeds[value][city]);
      data[index].cases.recovereds.push(recovereds[value][city]);

      const active = confirmeds[value][city] - (recovereds[value][city] + deaths[value][city]);
      data[index].cases.actives.push(active);

      const confirmedPerDay = value ? confirmeds[value][city] - confirmeds[value - 1][city] : confirmeds[value][city];
      data[index].cases.confirmedPerDay.push(confirmedPerDay);

      const recoveredPerDay = value ? recovereds[value][city] - recovereds[value - 1][city] : recovereds[value][city];
      data[index].cases.recoveredPerDay.push(recoveredPerDay);
    });
  }

  return data;
};

const handleLabelCharts = (maxValue, firstDate) => {
  const label = [];
  for (let i = 0; i < maxValue; i += 1) {
    label.push(format(addDays(firstDate, i), 'dd MMM yy', { locale: pt }));
  }
  return label;
};

const handleDataSheetsCovid = (cases, initialDate) => {
  const firstDate = new Date(initialDate);
  const lastValue = cases.confirmeds.length - 1;

  return {
    data: handleDataSheetCovid(cases, lastValue),
    labels: handleLabelCharts(lastValue, firstDate),
    lastUpdate: format(addDays(firstDate, lastValue), "dd' de 'MMMM' de 'yyyy'", { locale: pt }) };
};

module.exports = handleDataSheetsCovid;
