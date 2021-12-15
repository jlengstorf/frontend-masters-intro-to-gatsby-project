import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';

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
          path
        }
      }
    }
  }
`;

const SanityEpisode = ({ data }) => {
  const { sanityEpisode: episode } = data;

  return (
    <Layout
      title={episode.title}
      description={episode.description}
      image={`https://cdn.sanity.io/${episode.image.asset.path}`}
      path={`https://www.learnwithjason.dev/${episode.slug.current}`}
    >
      <GatsbyImage
        image={episode.image.asset.gatsbyImageData}
        alt={episode.title}
      />
      <h1>{episode.title}</h1>
      <p>{episode.description}</p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            Full Episode details
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${episode.youtubeID}`}>Watch Episode</a>
        </li>
      </ul>
    </Layout>
  );
};

export default SanityEpisode;
