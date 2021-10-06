import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SeoSocial(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      {/* Facebook, Google e.t.c required open graphs*/}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      {/* open graphs*/}
      <meta property="og.url" content={url} />
      <meta property="og.type" content="website" />
      <meta property="og.title" content={title} />
      <meta property="og.description" content={description} />
      {image && <meta name="og:image" content={image} />}

      {/* Twitter Required */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="image" content={image} />}
    </Helmet>
  );
};
