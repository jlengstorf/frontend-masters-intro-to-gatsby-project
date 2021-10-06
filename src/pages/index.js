import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: true)
          }
        }
      }
      allSanityEpisode(
        sort: { fields: date, order: DESC }
        filter: { youtubeID: { ne: "null" } }
        limit: 20
      ) {
        nodes {
          id
          title
          guest {
            name
          }
          gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="unamused corgi with red hearts"
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, Welcome to Gatsby Introduction!</h1>
      <Link to="/about">About This Site</Link>

      <h2>Check out my Recent Post</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>
            {''}
            <small>posted{post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
      <h2>
        Latest Episodes of <em>Learn With Jason</em>
      </h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={episode.gatsbyPath}>
              {episode.title}(with{episode.guest?.[0]?.name})
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://www.learnwithjason.dev/">
        Watch all episodes of <em>Learn With Jason</em>
      </a>
    </Layout>
  );
}
