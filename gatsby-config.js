module.exports = {
  siteMetadata: {
    title: "LOUD Program Sweden",
    author: "Adam J. Arling",
    imageUrl: "https://i.imgur.com/Vz81GEl.png",
    description: "Stärker Gemenskapen Med Musikutbildning i Världsklass.",
    keywords: `Music Education, Sweden, LOUD Program`,
    twitter: "https://twitter.com/amanhimself",
    github: `https://github.com/amandeepmittal`,
    medium: "https://medium.com/@amanhimself",
    gatsby: "https://www.gatsbyjs.org/",
    bulma: "https://bulma.io/",
    siteUrl: `https://loudprogramsweden.com`,
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
        name: "LOUD Program Sweden",
        short_name: "LOUD Program Sweden",
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
