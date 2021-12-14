import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout
      title="This is about this site"
      description="A very descriptive site description"
    >
      <h1>Hello from about</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
};

export default AboutPage;
