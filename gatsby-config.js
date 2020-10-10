module.exports = {
  siteMetadata: {
    title: "LOUD Sweden",
    author: "Adam J. Arling",
    imageUrl: "src/images/LOUDSwe2-inverted.png",
    description: "Stärker Gemenskapen Med Musikutbildning i Världsklass.",
    keywords: `Music Education, Sweden, LOUD`,
    instagram: "https://www.instagram.com/loudprogramsweden/",
    facebook: "https://www.facebook.com/loudprogramsweden/",
    youtube: "https://www.youtube.com/channel/UCGloIGY2ov_2XOzkkeoOTXA",
    siteUrl: `https://loudsweden.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/sliderimages`,
        name: "sliderimages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pdf`,
        name: "pdf",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "LOUD Sweden",
        short_name: "LOUD Sweden",
        start_url: "/",
        background_color: "#1c212e",
        theme_color: "#14b7ad",
        display: "standalone",
        icon: "src/images/favicon-512x512.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163800887-1",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
