const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'img'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-flow',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
  siteMetadata: {
    // TODO this should all be translated and translatable
    title: 'Uptown Buena Park Solidarity Network',
    description: 'A volunteer, grassroots group operating in Chicago\'s Uptown and Buena Park neighborhoods.',
    url: 'https://www.ubpsn.org',
    twitterUsername: '@ubpsn',
    faviconIco: '/static/favicon_2.ico',
    faviconPng: '/static/favicon_2.png',
  },
};
