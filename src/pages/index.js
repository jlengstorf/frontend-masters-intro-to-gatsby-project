import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
    return (
      <main>
        <h1>Hello Gatsby Introduction!</h1>
        <Link to="/about">About This Site</Link>
      </main>
    );
}