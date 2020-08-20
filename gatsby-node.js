const path = require('path');
const { handleDataSheetsCovid } = require('./src/utils/hooksSheetsGeneric');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/templates/blog-post.js');

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
      allGoogleSheetCuradosCoredecChapecoRow(filter: {total: {ne: 0}}) {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
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
      allGoogleSheetDescartadosCoredecChapecoRow(filter: {total: {ne: 0}}) {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
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
      allGoogleSheetObitosCoredecChapecoRow(filter: {total: {ne: 0}}) {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
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
      allGoogleSheetSuspeitosCoredecChapecoRow(filter: {total: {ne: 0}}) {
        nodes {
          aguasdechapeco
          aguasfrias
          arvoredo
          caxambu
          cordilheira
          coronelfreitas
          formosadosul
          guatambu
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
      path: item.city,
      component: blogPost,
      context: {
        data: item,
        label: labels,
        slug: item.city
      }
    });
  });
};
