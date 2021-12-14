import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
const IndexPage = () => {
  return (
    <>
      <Layout>
        <h1>Hello frontend masters</h1>
        <Link to="/about">About</Link>
      </Layout>
    </>
  );
};

export default IndexPage;
