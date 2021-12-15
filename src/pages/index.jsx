import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const ImgWrapper = styled.div`
  ${tw`flex items-center justify-center`};
  & > [data-gatsby-image-wrapper] {
    ${tw`border-4 rounded-full border-blue-900`}
  }
`;

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
      <ImgWrapper>
        <StaticImage
          src="../images/IMG_2043.jpg"
          alt="a corgi sitting on a bed with paper hearts on him"
          placeholder="dominantColor"
          width={600}
          height={600}
        />
      </ImgWrapper>
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
