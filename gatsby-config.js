module.exports = {
  pathPrefix: "/lichttechnik",
  siteMetadata: {
    title: `Tutorial Lichttechnik bei TEN SING`,
    description: `In diesem Tutorial könnt ihr lernen, wie man mit wenig Aufwand ein TEN SING Konzert ins richtige Licht rückt. Angefangen von der richtigen Wahl der Scheinwerfer und Technik und deren Positionierung über Grundlagen der Beleuchtung bis hin zu Basics des Lichtdesigns.`,
    author: `Philipp Jardas <philipp@jardas.de>`,
  },
  plugins: [
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
    "gatsby-plugin-material-ui",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-3900768-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tutorial Lichttechnik bei TEN SING`,
        short_name: `Lichttechnik`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/led.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: "Roboto", variants: [300, 400, 500, 700] }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
