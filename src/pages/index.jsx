import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
const IndexPage = (props) => {
  return (
    <>
      <Layout>
        <h1>Hello frontend masters</h1>
        <Link to="/about">About</Link>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Layout>
    </>
  );
};

export default IndexPage;
