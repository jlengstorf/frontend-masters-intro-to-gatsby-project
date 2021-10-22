import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout.js';

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
    }
  }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;

  return (
    <Layout title={episode.title} description={episode.description}>
      <h1>{episode.title}</h1>
      <p>
        (posted {episode.date}) - {episode.description}
      </p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            Full episode and details
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${episode.youtubeID}`}>Watch on YouTube</a>
        </li>
      </ul>
    </Layout>
  );
}
