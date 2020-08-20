const path = require('path');
const { handleDataSheetsCovid } = require('./src/utils/hooksSheetsGeneric');

const cities = {
  aguasdechapeco: { name: 'Águas de Chapecó', slug: 'aguas-de-chapeco' },
  aguasfrias: { name: 'Águas Frias', slug: 'aguas-frias' },
  arvoredo: { name: 'Arvoredo', slug: 'arvoredo' },
  caxambu: { name: 'Caxambu do Sul', slug: 'caxambu-do-sul' },
  cordilheira: { name: 'Cordilheira Alta', slug: 'cordilheira-alta' },
  coronelfreitas: { name: 'Coronel Freitas', slug: 'coronel-freitas' },
  formosadosul: { name: 'Formosa do Sul', slug: 'formosa-do-sul' },
  guatambu: { name: 'Guatambu', slug: 'guatambu' },
  irati: { name: 'Irati', slug: 'irati' },
  jardinopolis: { name: 'Jardinópolis', slug: 'jardinopolis' },
  novaerechim: { name: 'Nova Erechim', slug: 'nova-erechim' },
  novaitaberaba: { name: 'Nova Itaberaba', slug: 'nova-itaberaba' },
  paial: { name: 'Paial', slug: 'paial' },
  pinhalzinho: { name: 'Pinhalzinho', slug: 'pinhalzinho' },
  planaltoalegre: { name: 'Planalto Alegre', slug: 'planalto-alegre' },
  quilombo: { name: 'Quilombo', slug: 'quilombo' },
  santiagodosul: { name: 'Santiago do Sul', slug: 'santiago-do-sul' },
  saocarlos: { name: 'São Carlos', slug: 'sao-carlos' },
  serraalta: { name: 'Serra Alta', slug: 'serra-alta' },
  sulbrasil: { name: 'Sul Brasil', slug: 'sul-brasil' },
  uniaodooeste: { name: 'União do Oeste', slug: 'uniao-do-oeste' },
  // COREDEC MARAVILHA
  bomjesus: { name: 'Bom Jesus do Oeste', slug: 'bom-jesus-do-oeste' },
  caibi: { name: 'Caibi', slug: 'caibi' },
  campoere: { name: 'Campo Erê', slug: 'campo-ere' },
  cunhapora: { name: 'Cunha Porã', slug: 'cunha-pora' },
  cunhatai: { name: 'Cunhataí', slug: 'cunhatai' },
  flordosertao: { name: 'Flor do Sertão', slug: 'flor-do-sertao' },
  iraceminha: { name: 'Iraceminha', slug: 'iraceminha' },
  maravilha: { name: 'Maravilha', slug: 'maravilha' },
  modelo: { name: 'Modelo', slug: 'modelo' },
  palmitos: { name: 'Palmitos', slug: 'palmitos' },
  riqueza: { name: 'Riqueza', slug: 'riqueza' },
  romelandia: { name: 'Romelândia', slug: 'romelandia' },
  saltinho: { name: 'Saltinho', slug: 'saltinho' },
  santaterrezinha: { name: 'Santa Terezinha do Progresso', slug: 'santa-terrezinha-do-progresso' },
  saomiguel: { name: 'São Miguel da Boa Vista', slug: 'sao-miguel-da-boa-vista' },
  saudades: { name: 'Saudades', slug: 'saudades' },
  tigrinhos: { name: 'Tigrinhos', slug: 'tigrinhos' }
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
          bomjesus
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
          bomjesus
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
          bomjesus
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
          bomjesus
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
          bomjesus
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
    allGoogleSheetConfirmadosCoredecMaravilhaRow: { nodes: confirmedsMaravilha },
    allGoogleSheetCuradosCoredecMaravilhaRow: { nodes: recoveredsMaravilha },
    allGoogleSheetDescartadosCoredecMaravilhaRow: { nodes: discardedsMaravilha },
    allGoogleSheetSuspeitosCoredecMaravilhaRow: { nodes: suspectedsMaravilha },
    allGoogleSheetObitosCoredecMaravilhaRow: { nodes: deathsMaravilha }
  } = result.data;

  const allDataCases = {
    confirmeds: [],
    recovereds: [],
    discardeds: [],
    suspecteds: [],
    deaths: []
  };

  confirmedsChapeco.forEach((confimed, index) => {
    allDataCases.confirmeds.push(Object.assign(confimed, confirmedsMaravilha[index]));
    allDataCases.recovereds.push(Object.assign(recoveredsChapeco[index], recoveredsMaravilha[index]));
    allDataCases.discardeds.push(Object.assign(discardedsChapeco[index], discardedsMaravilha[index]));
    allDataCases.suspecteds.push(Object.assign(suspectedsChapeco[index], suspectedsMaravilha[index]));
    allDataCases.deaths.push(Object.assign(deathsChapeco[index], deathsMaravilha[index]));
  });

  const { data, labels } = handleDataSheetsCovid(allDataCases);

  data.forEach((item) => {
    createPage({
      path: cities[item.city].slug,
      component: panelCity,
      context: {
        data: item,
        name: cities[item.city].name,
        label: labels,
        slug: cities[item.city].slug
      }
    });
  });
};
