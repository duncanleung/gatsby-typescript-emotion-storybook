require('dotenv').config({
  path: '.env',
});

const supportedLanguages = require('./src/utils/i18n/supportedLanguages');

const languages = supportedLanguages.map(language => language.languageTag);

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-typescript',
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-serviceworker',
  'gatsby-plugin-svgr',
  {
    resolve: 'gatsby-plugin-intl',
    options: {
      path: `${__dirname}/src/locales`,
      languages,
      defaultLanguage: 'en-us',
      redirect: true,
    },
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [`Lora:400,700`],
      display: 'swap',
    },
  },
];

// Bundle analyzer, dev only
if (process.env.ENABLE_BUNDLE_ANALYZER === '1') {
  plugins.push('gatsby-plugin-webpack-bundle-analyser-v2');
}

module.exports = {
  plugins,
};
