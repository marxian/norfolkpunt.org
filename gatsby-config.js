module.exports = {
  siteMetadata: {
    title: 'Norfolk Punt Owners Association',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // you can use multiple source-filesystem instances
        path: `${__dirname}/data/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `boats`, // you can use multiple source-filesystem instances
        path: `${__dirname}/data/boats`,
      },
    },
    'gatsby-transformer-json',
  ],
}
