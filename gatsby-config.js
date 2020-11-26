const path = require('path');

require('dotenv').config();

const siteMetadata = require('./config/metadata');
const googleSheets = require('./config/google-sheets');

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-leaflet',
    ...googleSheets,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        cookieDomain: 'painelcoronavirus.com'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src')
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Painel Coronavirus',
        short_name: 'Painel Coronavirus',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#0b1a32',
        display: 'minimal-ui',
        icon: 'src/images/covid-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: false
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto:100,300,400,400i,700,700i',
          'Palanquin Dark: 400,600'
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-offline'
  ]
};
