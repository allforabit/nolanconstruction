import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
// Get rebass
import { Box, Button, Card } from "rebass";
import { Heading, BackgroundImage } from "../components";
import { withPrefix } from "gatsby-link";

// First impressions: Herb & Bloom logo - for big impact

// Tagline: Grown in London. For London.

// Description: Herb & Bloom is a new, innovative urban farming business soon to
// be opening in Battersea. Using modern hydroponic agricultural systems we will
// be delivering the freshest, premium culinary herbs & edible flowers to the
// London restaurant industry and local communities.

// We’d love to hear from you for any and all enquiries, so please feel free to
// drop us a line at; info@herbandbloomlondon.co.uk

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <BackgroundImage ratio={2 / 3} src={withPrefix("/img/chemex.jpg")}>
        <Heading>HELLO WORLD</Heading>
        <Button>Rebass</Button>
      </BackgroundImage>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
