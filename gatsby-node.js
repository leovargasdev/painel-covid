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
  uniaodooeste: { name: 'União do Oeste', slug: 'uniao-do-oeste' }
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
    }
  `
  );

  if (result.errors) {
    throw result.errors;
  }

  const {
    allGoogleSheetConfirmadosCoredecChapecoRow: { nodes: confirmeds },
    allGoogleSheetCuradosCoredecChapecoRow: { nodes: recovereds },
    allGoogleSheetDescartadosCoredecChapecoRow: { nodes: discardeds },
    allGoogleSheetSuspeitosCoredecChapecoRow: { nodes: suspecteds },
    allGoogleSheetObitosCoredecChapecoRow: { nodes: deaths }
  } = result.data;

  const { data, labels } = handleDataSheetsCovid({
    confirmeds,
    recovereds,
    discardeds,
    suspecteds,
    deaths
  });

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
