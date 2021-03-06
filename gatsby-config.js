require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
       apiToken: process.env.DATOCMS_READONLY_TOKEN=8d0105fb7a96106b70f3ad94e36d1a,
        // Preview the latest version of records instead of the published one
        previewMode: false,
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
        apiUrl: 'https://site-api.datocms.com'
      },
    },
  ],
}
