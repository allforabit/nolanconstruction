import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { Container } from 'components/container';
import { Box, Flex, Heading } from 'components/elements';
import { Text } from 'rebass';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import { Logo } from '../components/logo';
import { PrimaryHeading } from '../components/primary-heading';
import IO from 'components/io';

const TopBanner = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Flex
        bg="blue"
        css={{
          height: '75vh',
        }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          mb={3}
          css={{
            transition: 'all 700ms ease',
            transform: isVisible ? 'scale(1)' : 'scale(0)',
          }}
        >
          <Logo color="white" width={150} height={150} />
          <Text textAlign="center" mt={4} color="purple" fontFamily="sans">
            Grown in London. <br />
            For London
          </Text>
        </Box>
      </Flex>
    )}
  </IO>
);

const Index = ({ data }) => (
  <Layout>
    <TopBanner />
    <Box bg="grey">
      <Container>
        <Text fontFamily="sans" py={4} px={3} fontSize={1}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.homeJson.content.childMarkdownRemark.html,
            }}
          />
        </Text>
      </Container>
    </Box>
    <Box bg="purple">
      <Container>
        <PrimaryHeading>Products</PrimaryHeading>
        <Gallery items={data.homeJson.gallery} />
      </Container>
    </Box>
    <Box bg="grey">
      <Container>
        <PrimaryHeading>Contact Us</PrimaryHeading>
        <Box p={4}>
          <Text fontWeight="bold" mb={2}>
            Herb & Bloom
          </Text>
          <Text>
            Avro House - Unit 105
            <br />5 Havelock Terrace
            <br />
            London
            <br />
            SW8 4AS
            <br />
          </Text>
          <Text>078-7611-6588</Text>
        </Box>
      </Container>
    </Box>
    <div style={{ height: '100vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 250, maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
