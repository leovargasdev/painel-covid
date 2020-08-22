const { format, addDays } = require('date-fns');
const { pt } = require('date-fns/locale/pt');

const handleDataSheetCovid = (cities, { confirmeds,
  recovereds,
  suspecteds,
  deaths }, data, maxValue) => {
  for (let k = 0; k < maxValue; k += 1) {
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

const handleLabelCharts = (maxValue) => {
  const firstDate = new Date('6-01-2020');
  const label = [];
  for (let i = 0; i < maxValue; i += 1) {
    label.push(format(addDays(firstDate, i), 'MMM dd', {
      locale: pt
    }));
  }
  return label;
};

const handleDataSheetsCovid = (cases, maxValue) => {
  const cities = Object.keys(cases.confirmeds[0]);

  const labels = handleLabelCharts(maxValue);

  const p = maxValue - 1; // última posição válida do array

  const data = cities.map((city) => ({
    city,
    cases: {
      confirmeds: [], actives: [], suspecteds: [], recovereds: [], confirmedPerDay: [], recoveredPerDay: []
    },
    statusCases: {
      actives: cases.confirmeds[p][city] - (cases.recovereds[p][city] + cases.deaths[p][city]),
      deaths: cases.deaths[p][city],
      discarded: cases.discardeds[p][city],
      recovered: cases.recovereds[p][city],
      suspected: cases.suspecteds[p][city]
    }
  }));

  handleDataSheetCovid(cities, cases, data, maxValue);

  return { data, labels, lastUpdate: format(addDays(new Date('6-01-2020'), maxValue), "dd' de 'MMMM' de 'yyyy'", { locale: pt }) };
};

module.exports = {
  handleDataSheetsCovid
};
