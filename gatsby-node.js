const path = require('path');
const { handleDataSheetsCovid } = require('./src/utils/hooksSheetsGeneric');

const cities = require('./cities');

const createPageCitiesCoredec = (cases, createPage, panelCity, initialDate = '6-01-2020') => {
  const { data, labels, lastUpdate } = handleDataSheetsCovid(cases, initialDate);

  data.forEach((item) => {
    createPage({
      path: cities[item.city].slug,
      component: panelCity,
      context: {
        lastUpdate,
        data: item,
        name: cities[item.city].name,
        label: labels,
        slug: cities[item.city].slug
      }
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const panelCity = path.resolve('./src/templates/panel-city.js');

  const result = await graphql(
    `
    {
      allGoogleSheetConfirmadosCoredecChapecoRow(filter: {total: {ne: 0}}) {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
          irati
          jardinopolis
          novaerechim
          novaitaberaba
          paial
          pinhalzinho
          planaltoalegre
          quilombo
          santiagodosul
          saocarlos
          serraalta
          sulbrasil
          uniaodooeste
        }
      }
      allGoogleSheetCuradosCoredecChapecoRow {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
          irati
          jardinopolis
          novaerechim
          novaitaberaba
          paial
          pinhalzinho
          planaltoalegre
          quilombo
          santiagodosul
          saocarlos
          serraalta
          sulbrasil
          uniaodooeste
        }
      }
      allGoogleSheetDescartadosCoredecChapecoRow {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
          irati
          jardinopolis
          novaerechim
          novaitaberaba
          paial
          pinhalzinho
          planaltoalegre
          quilombo
          santiagodosul
          saocarlos
          serraalta
          sulbrasil
          uniaodooeste
        }
      }
      allGoogleSheetObitosCoredecChapecoRow {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
          irati
          jardinopolis
          novaerechim
          novaitaberaba
          paial
          pinhalzinho
          planaltoalegre
          quilombo
          santiagodosul
          saocarlos
          serraalta
          sulbrasil
          uniaodooeste
        }
      }
      allGoogleSheetSuspeitosCoredecChapecoRow {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
          irati
          jardinopolis
          novaerechim
          novaitaberaba
          paial
          pinhalzinho
          planaltoalegre
          quilombo
          santiagodosul
          saocarlos
          serraalta
          sulbrasil
          uniaodooeste
        }
      }
      allGoogleSheetConfirmadosCoredecMaravilhaRow(filter: {total: {ne: 0}}) {
        nodes {
          bomjesusdooeste
          caibi
          campoere
          cunhapora
          cunhatai
          flordosertao
          iraceminha
          maravilha
          modelo
          palmitos
          riqueza
          romelandia
          saltinho
          santaterrezinha
          saomiguel
          saudades
          tigrinhos
        }
      }
      allGoogleSheetCuradosCoredecMaravilhaRow {
        nodes {
          bomjesusdooeste
          caibi
          campoere
          cunhapora
          cunhatai
          flordosertao
          iraceminha
          maravilha
          modelo
          palmitos
          riqueza
          romelandia
          saltinho
          santaterrezinha
          saomiguel
          saudades
          tigrinhos
        }
      }
      allGoogleSheetDescartadosCoredecMaravilhaRow {
        nodes {
          bomjesusdooeste
          caibi
          campoere
          cunhapora
          cunhatai
          flordosertao
          iraceminha
          maravilha
          modelo
          palmitos
          riqueza
          romelandia
          saltinho
          santaterrezinha
          saomiguel
          saudades
          tigrinhos
        }
      }
      allGoogleSheetSuspeitosCoredecMaravilhaRow {
        nodes {
          bomjesusdooeste
          caibi
          campoere
          cunhapora
          cunhatai
          flordosertao
          iraceminha
          maravilha
          modelo
          palmitos
          riqueza
          romelandia
          saltinho
          santaterrezinha
          saomiguel
          saudades
          tigrinhos
        }
      }
      allGoogleSheetObitosCoredecMaravilhaRow {
        nodes {
          bomjesusdooeste
          caibi
          campoere
          cunhapora
          cunhatai
          flordosertao
          iraceminha
          maravilha
          modelo
          palmitos
          riqueza
          romelandia
          saltinho
          santaterrezinha
          saomiguel
          saudades
          tigrinhos
        }
      }
      allGoogleSheetConfirmadosCoredecXanxereRow(filter: {totalgeral: {ne: 0}}) {
        nodes {
          abelardoluz
          bomjesus
          coronelmartins
          entrerios
          faxinaldosguedes
          galvao
          ipuacu
          jupia
          lajeadogrande
          marema
          novohorizonte
          ouroverde
          passosmaia
          ponteserrada
          saobernardino
          saodomingos
          saolourencodooeste
          vargeao
          xanxere
          xaxim
        }
      }
      allGoogleSheetCuradosCoredecXanxereRow {
        nodes {
          abelardoluz
          bomjesus
          coronelmartins
          entrerios
          faxinaldosguedes
          galvao
          ipuacu
          jupia
          lajeadogrande
          marema
          novohorizonte
          ouroverde
          passosmaia
          ponteserrada
          saobernardino
          saodomingos
          saolourencodooeste
          vargeao
          xanxere
          xaxim
        }
      }
      allGoogleSheetDescartadosCoredecXanxereRow {
        nodes {
          abelardoluz
          bomjesus
          coronelmartins
          entrerios
          faxinaldosguedes
          galvao
          ipuacu
          jupia
          lajeadogrande
          marema
          novohorizonte
          ouroverde
          passosmaia
          ponteserrada
          saobernardino
          saodomingos
          saolourencodooeste
          vargeao
          xanxere
          xaxim
        }
      }
      allGoogleSheetSuspeitosCoredecXanxereRow {
        nodes {
          abelardoluz
          bomjesus
          coronelmartins
          entrerios
          faxinaldosguedes
          galvao
          ipuacu
          jupia
          lajeadogrande
          marema
          novohorizonte
          ouroverde
          passosmaia
          ponteserrada
          saobernardino
          saodomingos
          saolourencodooeste
          vargeao
          xanxere
          xaxim
        }
      }
      allGoogleSheetObitosCoredecXanxereRow {
        nodes {
          abelardoluz
          bomjesus
          coronelmartins
          entrerios
          faxinaldosguedes
          galvao
          ipuacu
          jupia
          lajeadogrande
          marema
          novohorizonte
          ouroverde
          passosmaia
          ponteserrada
          saobernardino
          saodomingos
          saolourencodooeste
          vargeao
          xanxere
          xaxim
        }
      }
      allGoogleSheetConfirmadosCoredecMiguelRow(filter: {total: {ne: 0}}) {
        nodes {
          anchieta
          bandeirantes
          barrabonita
          belmonte
          descanso
          dionisio
          guaraciaba
          guarujadosul
          ipora
          itapiranga
          mondai
          palmasola
          paraiso
          princesa
          santahelena
          saojoaodooeste
          saojosedocedro
          saomigueldooeste
          tunapolis
        }
      }
      allGoogleSheetCuradosCoredecMiguelRow {
        nodes {
          anchieta
          bandeirantes
          barrabonita
          belmonte
          descanso
          dionisio
          guaraciaba
          guarujadosul
          ipora
          itapiranga
          mondai
          palmasola
          paraiso
          princesa
          santahelena
          saojoaodooeste
          saojosedocedro
          saomigueldooeste
          tunapolis
        }
      }
      allGoogleSheetDescartadosCoredecMiguelRow {
        nodes {
          anchieta
          bandeirantes
          barrabonita
          belmonte
          descanso
          dionisio
          guaraciaba
          guarujadosul
          ipora
          itapiranga
          mondai
          palmasola
          paraiso
          princesa
          santahelena
          saojoaodooeste
          saojosedocedro
          saomigueldooeste
          tunapolis
        }
      }
      allGoogleSheetSuspeitosCoredecMiguelRow {
        nodes {
          anchieta
          bandeirantes
          barrabonita
          belmonte
          descanso
          dionisio
          guaraciaba
          guarujadosul
          ipora
          itapiranga
          mondai
          palmasola
          paraiso
          princesa
          santahelena
          saojoaodooeste
          saojosedocedro
          saomigueldooeste
          tunapolis
        }
      }
      allGoogleSheetObitosCoredecMiguelRow {
        nodes {
          anchieta
          bandeirantes
          barrabonita
          belmonte
          descanso
          dionisio
          guaraciaba
          guarujadosul
          ipora
          itapiranga
          mondai
          palmasola
          paraiso
          princesa
          santahelena
          saojoaodooeste
          saojosedocedro
          saomigueldooeste
          tunapolis
        }
      }
    }
  `
  );

  if (result.errors) {
    throw result.errors;
  }

  const {
    allGoogleSheetConfirmadosCoredecChapecoRow: { nodes: confirmedsChapeco },
    allGoogleSheetCuradosCoredecChapecoRow: { nodes: recoveredsChapeco },
    allGoogleSheetDescartadosCoredecChapecoRow: { nodes: discardedsChapeco },
    allGoogleSheetSuspeitosCoredecChapecoRow: { nodes: suspectedsChapeco },
    allGoogleSheetObitosCoredecChapecoRow: { nodes: deathsChapeco },
    // COREDEC MARAVILHA
    allGoogleSheetConfirmadosCoredecMaravilhaRow: { nodes: confirmedsMaravilha },
    allGoogleSheetCuradosCoredecMaravilhaRow: { nodes: recoveredsMaravilha },
    allGoogleSheetDescartadosCoredecMaravilhaRow: { nodes: discardedsMaravilha },
    allGoogleSheetSuspeitosCoredecMaravilhaRow: { nodes: suspectedsMaravilha },
    allGoogleSheetObitosCoredecMaravilhaRow: { nodes: deathsMaravilha },
    // // COREDEC SÃO MIGUEL
    allGoogleSheetConfirmadosCoredecMiguelRow: { nodes: confirmedsMiguel },
    allGoogleSheetCuradosCoredecMiguelRow: { nodes: recoveredsMiguel },
    allGoogleSheetDescartadosCoredecMiguelRow: { nodes: discardedsMiguel },
    allGoogleSheetSuspeitosCoredecMiguelRow: { nodes: suspectedsMiguel },
    allGoogleSheetObitosCoredecMiguelRow: { nodes: deathsMiguel },
    // COREDEC XANXERE
    allGoogleSheetConfirmadosCoredecXanxereRow: { nodes: confirmedsXanxere },
    allGoogleSheetCuradosCoredecXanxereRow: { nodes: recoveredsXanxere },
    allGoogleSheetDescartadosCoredecXanxereRow: { nodes: discardedsXanxere },
    allGoogleSheetSuspeitosCoredecXanxereRow: { nodes: suspectedsXanxere },
    allGoogleSheetObitosCoredecXanxereRow: { nodes: deathsXanxere }
  } = result.data;

  createPageCitiesCoredec({
    confirmeds: confirmedsChapeco,
    recovereds: recoveredsChapeco,
    discardeds: discardedsChapeco,
    deaths: deathsChapeco,
    suspecteds: suspectedsChapeco
  }, createPage, panelCity);

  createPageCitiesCoredec({
    confirmeds: confirmedsMaravilha,
    recovereds: recoveredsMaravilha,
    discardeds: discardedsMaravilha,
    deaths: deathsMaravilha,
    suspecteds: suspectedsMaravilha
  }, createPage, panelCity);

  createPageCitiesCoredec({
    confirmeds: confirmedsMiguel,
    recovereds: recoveredsMiguel,
    discardeds: discardedsMiguel,
    deaths: deathsMiguel,
    suspecteds: suspectedsMiguel
  }, createPage, panelCity);

  createPageCitiesCoredec({
    confirmeds: confirmedsXanxere,
    recovereds: recoveredsXanxere,
    discardeds: discardedsXanxere,
    deaths: deathsXanxere,
    suspecteds: suspectedsXanxere
  }, createPage, panelCity, '3-19-2020');
};
