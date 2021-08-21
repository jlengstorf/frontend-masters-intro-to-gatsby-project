import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <main>
      <h1>Hello Front end Masters!</h1>
      <Link to="/about">Go to about</Link>
    </main>
  );
}
