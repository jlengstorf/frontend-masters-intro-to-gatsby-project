import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from './Seo';
import GlobalStyles from '../styles/GlobalStyles';
import tw, { styled } from 'twin.macro';

const Header = tw.header`bg-gray-900 text-white flex justify-between px-4 items-center`;
const NavLink = styled(Link)(() => [
  tw` inline-block p-2 no-underline hocus:(outline-none bg-white text-gray-900)`,
  `color: inherit`,
]);

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
      <GlobalStyles />
      <Header>
        <NavLink to="/">{meta.title}</NavLink>
        <nav>
          <NavLink to="/about">About</NavLink>
        </nav>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
