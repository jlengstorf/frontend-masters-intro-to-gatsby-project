import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

//Page Query
export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childrenImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({data}) {
  return (
    <Layout title="About This Site" description="More information about us" >
      <GatsbyImage image={getImage(data.file)}
        alt=" a cocktail set inside an elaborate floral arrangement with dry ice mist curling"
      />
      <h1>About This Site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
