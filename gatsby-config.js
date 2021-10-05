module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Gatsby Introduction Course',
    description: 'Introduction course to Gatsby',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      
      // Plugins for enabling mdx blog postsin the src/components folder.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
              posts: require.resolve('./src/components/post-layout.js')
          }
      },
      },
    // End of MDX config.

  ],
};
