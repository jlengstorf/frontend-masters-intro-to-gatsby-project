import React from 'react';
import { Global, css } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  body {
    ${tw`antialiased text-gray-900 text-lg m-0`}
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`text-black`}
  }
  main {
    ${tw`prose prose-blue my-12 mx-auto px-2`}
  }
  main a {
    ${tw`no-underline focus:(outline-none ring-1 ring-blue-500 ring-offset-2)`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
