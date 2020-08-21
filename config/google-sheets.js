require('dotenv').config();

const googlePrivateKey = process.env.GOOGLE_API_PRIVATE_KEY.replace(
  new RegExp('\\\\n', '\g'), '\n'
);
const cytiesSheets = [];
// Dados Chapeco

const cyties = ['chapeco', 'blumenau', 'xaxim', 'oeste', 'patoBranco', 'novaTebas', 'xanxere'].slice(0, 2);

const idsSheets = {
  chapeco: '1LH6l05MUXcXi-dJH25sV7bbq_nWCeldlDy_Kf-cLLMk',
  blumenau: '1pWmBhyZJ6Rn5di2aGeCs4KMa_6fuGgVH18P1plZjHf8',
  // xaxim: '1zQgjGQB_hDSot8oOqePjSgLq3TI6W1JjqMGJanolykU',
  // oeste: '1J_oYIupJpvho8F17A65Um2LqkBleCPt_okYIPn3OWWc',
  // patoBranco: '1AGYdUqWBKS6HKuv-o7izZ41g-oyVOoFELCTKb2cBuaA',
  coredecChapeco: '1WMiNCMlwWxRs90uJLylxIFr-f4kGD2k-SI-CKlIVhUA',
  coredecMaravilha: '1cQ3HZUsHq55SN-QzpNwvNj3ZE8ouLjcYXMh9qM291aI',
  coredecMiguel: '1ONsnGHX_hm0cqQQeTvgqjiGKIYPR4RSbHPcBxOgP_X8',
  coredecXanxere: '10MbSB9Eb4nAq1pQIdXyCBfKOXv97K12dABc2YAsKxCs'
  // novaTebas: '1xN7f_llDQHgI8UDAjEXQXFf6HrFM-YVhdEK45qk8RLU',
  // xanxere: '1ceUof5osyNH_nNQaJF4--d0BrJtqeLx8-bWIO1DkUdw'
};


['ages', 'neighborhoods', 'hospital'].forEach((title) => cytiesSheets.push({
  resolve: 'gatsby-source-google-sheets',
  options: {
    spreadsheetId: idsSheets.chapeco,
    worksheetTitle: `covid-chapeco-${title}`,
    credentials: {
      client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
      private_key: googlePrivateKey
    }
  }
}));

cyties.forEach((city) => cytiesSheets.push({
  resolve: 'gatsby-source-google-sheets',
  options: {
    spreadsheetId: idsSheets[city],
    worksheetTitle: `covid-${city}`,
    credentials: {
      client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
      private_key: googlePrivateKey
    }
  }
}));

// cytiesSheets.push({
//   resolve: 'gatsby-source-google-sheets',
//   options: {
//     spreadsheetId: idsSheets.oeste,
//     worksheetTitle: 'covid-cidades-oeste',
//     credentials: {
//       client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
//       private_key: googlePrivateKey
//     }
//   }
// });

['coredecChapeco', 'coredecMaravilha', 'coredecMiguel', 'coredecXanxere'].forEach((coredec) => {
  ['confirmados', 'curados', 'suspeitos', 'obitos', 'descartados'].forEach((typeCase) => cytiesSheets.push({
    resolve: 'gatsby-source-google-sheets',
    options: {
      spreadsheetId: idsSheets[coredec],
      worksheetTitle: `${typeCase}-${coredec}`,
      credentials: {
        client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
        private_key: googlePrivateKey
      }
    }
  }));
});

module.exports = cytiesSheets;
