import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 80vh;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const Hero = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "map.png" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <ImageBackground fluid={image.sharp.fluid} />
    )
}

export default Hero;
