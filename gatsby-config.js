require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Jeremiah Billmann`,
    siteTitleAlt: `Jeremiah Billmann - Developer, Speaker, Blogger`,
    siteDescription: `Jeremiah Billmann - Developer, Speaker, Blogger`,
    siteHeadline: `Jeremiah Billmann - Developer, Speaker, Blogger`,
    author: `@jbillmann`,
    siteUrl: `https://www.jbillmann.com`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/jbillmann`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/jeremiah-billmann-86393117`
          },
          {
            name: `GitHub`,
            url: `https://www.github.com/jbillmann`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jeremiah Billmann - Developer, Speaker, Blogger`,
        short_name: `Jeremiah Billmann - Developer, Speaker, Blogger`,
        description: `Software engineer most of the time.  Beer aficionado, 60% of the time, all the time.  And this is my blog some of the time.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
