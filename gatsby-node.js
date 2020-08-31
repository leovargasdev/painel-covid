const path = require('path');
const { handleDataSheetsCovid } = require('./src/utils/hooksSheetsGeneric');

const cities = require('./cities');

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
      allGoogleSheetConfirmadosCoredecXanxereRow(skip: 65, filter: {totalgeral: {ne: 0}}) {
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
      allGoogleSheetCuradosCoredecXanxereRow(skip: 74) {
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
      allGoogleSheetDescartadosCoredecXanxereRow(skip: 74) {
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
      allGoogleSheetSuspeitosCoredecXanxereRow(skip: 74) {
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
      allGoogleSheetObitosCoredecXanxereRow(skip: 74) {
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
    // COREDEC SÃO MIGUEL
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

  const allDataCases = {
    confirmeds: [],
    recovereds: [],
    discardeds: [],
    suspecteds: [],
    deaths: []
  };

  // const minValue = [confirmedsChapeco.length, confirmedsMaravilha.length, confirmedsMiguel.length, confirmedsXanxere.length].sort()[0];
  const minValue = confirmedsChapeco.length;
  console.log(confirmedsChapeco.length, confirmedsMaravilha.length, confirmedsMiguel.length, confirmedsXanxere.length);
  confirmedsChapeco.forEach((confimed, index) => {
    allDataCases.confirmeds.push(Object.assign(confimed, confirmedsMaravilha[index], confirmedsMiguel[index], confirmedsXanxere[index]));
    allDataCases.recovereds.push(Object.assign(recoveredsChapeco[index], recoveredsMaravilha[index], recoveredsMiguel[index], recoveredsXanxere[index]));
    allDataCases.discardeds.push(Object.assign(discardedsChapeco[index], discardedsMaravilha[index], discardedsMiguel[index], discardedsXanxere[index]));
    allDataCases.suspecteds.push(Object.assign(suspectedsChapeco[index], suspectedsMaravilha[index], suspectedsMiguel[index], suspectedsXanxere[index]));
    allDataCases.deaths.push(Object.assign(deathsChapeco[index], deathsMaravilha[index], deathsMiguel[index], deathsXanxere[index]));
  });

  const { data, labels, lastUpdate } = handleDataSheetsCovid(allDataCases, minValue);

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
