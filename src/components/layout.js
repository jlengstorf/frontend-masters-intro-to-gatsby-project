import * as React from 'react';
import { Link } from 'gatsby';
import { header, content } from '../styles/layout.module.css';

import '../styles/global.css';

export function Layout({ children }) {
  return (
    <>
      <header className={header}>
        <Link to="/">Intro to Gatsby</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  );
}
