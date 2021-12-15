import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            date(fromNow: true)
          }
        }
      }
    }
  `);

  const posts = data?.allMdx?.nodes;

  return (
    <Layout>
      <h1>Hello frontend masters</h1>
      <Link to="/about">About</Link>
      <h2>Check out my recent blog posts</h2>
      {posts && (
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link to={post.slug}>{post.frontmatter.title} </Link>
                <small>posted: {post.frontmatter.date}</small>
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
};

export default IndexPage;
