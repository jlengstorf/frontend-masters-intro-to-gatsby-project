import * as React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../componet/layout';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hhhhh</h1>
      <Link to="/about">About this site</Link>
    </Layout>
  );
}
