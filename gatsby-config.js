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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-R765QHVP3H',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'www.kratky.tech',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
