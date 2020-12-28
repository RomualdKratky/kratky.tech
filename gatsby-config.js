module.exports = {
  siteMetadata: {
    title: `kratky.tech`,
    siteUrl: `https://kratky.tech`,
    description: `Personal website of Romuald Kratky - kratky.tech`,
    copyright: 'All rights reserved.',
    author: {
      name: `Romuald Kratky`,
      photo: 'rk.jpg',
      bio:
        'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
      contacts: {
        linkedin: '#',
        xing: '#',
        email: 'mailto:romuald@kratky.tech',
        github: '#',
      },
    },
    menu: [
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'About me',
        path: '/about',
      },
      {
        label: 'Contact me',
        path: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
