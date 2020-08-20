const { format, addDays } = require('date-fns');
const { pt } = require('date-fns/locale/pt');

const handleDataSheetCovid = (cities, { confirmeds,
  recovereds,
  suspecteds,
  deaths }, data) => {
  const maxValue = confirmeds.length - 1;
  // const statusCases
  for (let k = 0; k < maxValue; k += 1) {
    cities.forEach((city, index) => {
      const active = confirmeds[k][city] - (recovereds[k][city] + deaths[k][city]);

      data[index].cases.suspecteds.push(suspecteds[k][city]);
      data[index].cases.confirmeds.push(confirmeds[k][city]);
      data[index].cases.recovereds.push(recovereds[k][city]);
      data[index].cases.actives.push(active);
      data[index].cases.confirmedPerDay.push(k ? confirmeds[k][city] - confirmeds[k - 1][city] : confirmeds[k][city]);
      data[index].cases.recoveredPerDay.push(k ? recovereds[k][city] - recovereds[k - 1][city] : recovereds[k][city]);
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

const handleDataSheetsCovid = (cases) => {
  const cities = Object.keys(cases.confirmeds[0]);
  const maxValue = cases.confirmeds.length - 1;

  const labels = handleLabelCharts(maxValue);

  const data = cities.map((city) => ({
    city,
    cases: { confirmeds: [], actives: [], suspecteds: [], recovereds: [], confirmedPerDay: [], recoveredPerDay: [] },
    statusCases: {
      actives: cases.confirmeds[maxValue][city] - (cases.recovereds[maxValue][city] + cases.deaths[maxValue][city]),
      deaths: cases.deaths[maxValue][city],
      discarded: 0,
      recovered: cases.recovereds[maxValue][city],
      suspected: cases.suspecteds[maxValue][city]
    }
  }));

  handleDataSheetCovid(cities, cases, data);

  return { data, labels };
};

// export default handleDataSheetsCovid;

module.exports = {
  handleDataSheetsCovid
};
