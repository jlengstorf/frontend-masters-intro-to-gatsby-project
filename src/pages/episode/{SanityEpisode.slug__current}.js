import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
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
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;

  return (
    episode.youtubeID && (
      <Layout title={episode.title} description={episode.description}>
        {episode.image ? (
          <GatsbyImage
            image={episode.image.asset.gatsbyImageData}
            alt={episode.title}
          />
        ) : (
          <StaticImage
            url={`https://www.learnwithjason.dev/${episode.slug.current}/poster.jpg`}
            alt={episode.title}
          />
        )}
        <h1>{episode.title}</h1>
        <p>
          (posted {episode.date}) — {episode.description}
        </p>
        <ul>
          <li>
            <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
              full episode and details
            </a>
          </li>
          <li>
            <a href={`https://youtu.be/${episode.youtubeID}`}>
              watch on YouTube
            </a>
          </li>
        </ul>
      </Layout>
    )
  );
}
