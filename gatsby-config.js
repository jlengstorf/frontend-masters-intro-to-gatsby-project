module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Frontend Masters Intro to Gatsby',
    description: 'Frontend Masters Intro to Gatsby Project',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-images.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    // Enables creation of MDX blog posts from src/posts folder
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
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
    // end of MDX config
  ],
};
