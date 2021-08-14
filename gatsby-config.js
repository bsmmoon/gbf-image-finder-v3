require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Granblue Fantasy Image Finder v3`,
    description: `Find the images from Granblue Fantasy more easily! This is the new version of the good-ol gbf-image-finder.`,
    author: `@bsmoonmoon`,
    keywords: "granblue fantasy, gbf, granblue fantasy image finder, gbf image finder, granblue image finder, gbf-image-finder"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: process.env.TRACKING_ID,
        head: false,
        anonymize: true,
      }
    }
  ],
}

