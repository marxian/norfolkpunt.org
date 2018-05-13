module.exports = {
  pathPrefix: '/norfolkpunt.org',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/data/images`,
        plugins: ['gatsby-transformer-sharp', 'gatsby-plugin-sharp'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'events',
        path: `${__dirname}/data/events`,
        plugins: ['gatsby-transformer-remark'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'boats',
        path: `${__dirname}/data/boats`,
        plugins: ['gatsby-transformer-json'],
      },
    },
  ],
}
