module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: '🍕🍗🥦 Frontend Masters Intro to Gatsby',
    description: 'Frontend Masters Intro to Gatsby Course',
    image:
      'https://res.cloudinary.com/adriantoddross/image/upload/v1596736103/Adrian_Ross_-_Headshot_3.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },

    // This set of plug-ins is to enable creating MDX blog posts from the ./src/ folder
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
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
  ],
};
