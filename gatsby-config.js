module.exports = {
  pathPrefix: '/norfolkpunt.org',
  siteMetadata: {
    title: 'Norfolk Punt',
    subtitle: 'Owners Association',
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
        path: `${__dirname}/data`,
        plugins: ['gatsby-transformer-remark'],
      },
    },
  ],
}
