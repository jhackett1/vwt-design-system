// ======================================
// GATSBY-CONFIG.JS
// Change site title, Google Web Fonts,
// favicon and GA tracking ID here
// ======================================


module.exports = {
  siteMetadata: {
    title: "VWT Block Library",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/blocks/`,
      },
    },
  ],
}
