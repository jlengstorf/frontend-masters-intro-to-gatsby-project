import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from './Seo';

const Layout = ({
  children,
  title = false,
  description = false,
  path = false,
  image = false,
}) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
