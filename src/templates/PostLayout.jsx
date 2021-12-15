import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const PostLayout = ({ children, pageContext }) => {
  const { title, description } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; Back</Link>
    </Layout>
  );
};

export default PostLayout;
