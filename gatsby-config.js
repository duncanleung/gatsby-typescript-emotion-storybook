require("dotenv").config();
const path = require("path");

const basePlugins = [
  `gatsby-plugin-typescript`,
  `gatsby-plugin-emotion`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-react-helmet-async`,
  // `gatsby-plugin-react-axe`,
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/intl`,
      // supported language
      languages: [`en`],
      // language file path
      defaultLanguage: `en`,
      // option to redirect to `/ko` when connecting `/`
      // redirect: true,
    },
  },
];

let productionPlugins = [];

if (process.env.NODE_ENV == "production") {
  console.log("Adding production plugins");
  productionPlugins = [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://easybank-codewaseem.netlify.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ];
}

module.exports = {
  siteMetadata: {
    title: "EasyBank",
    description:
      "Next generation digital banking, Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
    keywords:
      "Gatsby, Frontend, Fullstack, HTML5, CSS3, JavaScript, React, Waseem Ahmed",
    siteUrl: "https://easybank-codewaseem.netlify.com",
    lang: "en",
  },
  plugins: [...basePlugins, ...productionPlugins],
};
