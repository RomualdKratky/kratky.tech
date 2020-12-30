module.exports = {
  siteMetadata: {
    title: `kratky.tech`,
    siteUrl: `https://kratky.tech`,
    description: `Personal Website of Romuald Kratky - kratky.tech`,
    copyright: 'Alle Rechte vorbehalten.',
    author: {
      name: `Romuald Kratky`,
      photo: 'rk.jpg',
      bio:
        'Web Developer | Problemlöser | Vater von 2 | Triathlet | Sport Enthusiast',
      contacts: {
        linkedin: 'https://www.linkedin.com/in/romuald-kratky-b36243170/',
        xing: 'https://www.xing.com/profile/Romuald_Kratky',
        email: 'mailto:romuald@kratky.tech',
        github: 'https://github.com/RomualdKratky',
      },
    },
    menu: [
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'Über mich',
        path: '/about',
      },
      {
        label: 'Kontakt',
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
        name: `kratky.tech`,
        short_name: `kratky.tech`,
        start_url: `/`,
        background_color: `#b6b6b6`,
        theme_color: `#b6b6b6`,
        display: `standalone`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-R765QHVP3H', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
