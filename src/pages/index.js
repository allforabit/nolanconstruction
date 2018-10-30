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
import mapboxgl from 'mapbox-gl';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'react-feather';
import { Carousel } from '../components/carousel';
import { Spring } from '../components/spring';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxsZm9yYWJpdCIsImEiOiJjamhhbXNoY3QwcGZhMzBxZ2o2cmt2YnpqIn0.FNihk7OBud6P4ZhrZzJ_8g';

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 17.0,
      center: [-0.14382, 51.47751],
    });
    this.map.on('dragstart', event => {
      if (
        !(
          event.originalEvent &&
          'touches' in event.originalEvent &&
          event.originalEvent.touches.length >= 2
        )
      ) {
        this.map.dragPan.disable();
        this.map.dragPan.enable();
      }
    });

    // this.map.on('load', function() {
    //   /* Image: An image is loaded and added to the map. */
    //   this.map.loadImage('https://i.imgur.com/MK4NUzI.png', function(error, image) {
    //     if (error) throw error;
    //     this.map.addImage('custom-marker', image);
    //     /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
    //     this.map.addLayer({
    //       id: 'markers',
    //       type: 'symbol',
    //       /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    //       source: {
    //         type: 'geojson',
    //         data: {
    //           type: 'FeatureCollection',
    //           features: [
    //             {
    //               type: 'Feature',
    //               geometry: {
    //                 type: 'Point',
    //                 coordinates: [-0.14382115182777966, 51.477614762057044],
    //               },
    //             },
    //           ],
    //         },
    //       },
    //       layout: {
    //         'icon-image': 'custom-marker',
    //       },
    //     });
    //   });
    // });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        ref={el => (this.mapContainer = el)}
      />
    );
  }
}

const slideShowItems = [
  <Box
    key="logo"
    mx="auto"
    mb={3}
    css={{
      transition: 'all 700ms ease',
      // transform: isVisible ? 'scale(1)' : 'scale(0)',
    }}
  >
    <Box width={[200, 300]} mx="auto">
      <Logo color="white" width="100%" height="100%" />
    </Box>
    <Text textAlign="center" mt={4} color="purple" fontFamily="sans">
      Grown in London. <br />
      For London
    </Text>
  </Box>,
  <Box key="image-1">Hello</Box>,
];

const TopBanner = () => {
  return (
    <IO rootMargin="-50px">
      {({ isVisible }) => (
        <Flex
          bg="blue"
          css={{
            height: '100vh',
          }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Carousel
            items={[
              <Box
                key="logo"
                mx="auto"
                mb={3}
                css={{
                  transition: 'all 700ms ease',
                  // transform: isVisible ? 'scale(1)' : 'scale(0)',
                }}
              >
                <Box width={[200, 300]} mx="auto">
                  <Logo color="white" width="100%" height="100%" />
                </Box>
                <Text
                  textAlign="center"
                  mt={4}
                  color="purple"
                  fontFamily="sans"
                >
                  Grown in London. <br />
                  For London
                </Text>
              </Box>,
              <Box key="image-1" />,
            ]}
          />
        </Flex>
      )}
    </IO>
  );
};

const Index = ({ data, theme }) => (
  <Layout>
    <TopBanner />
    <Box bg="grey">
      <Container>
        <Text
          fontFamily="sans"
          py={4}
          px={3}
          fontSize={[1, 2]}
          lineHeight={1.25}
          letterSpacing={1.1}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data.homeJson.content.childMarkdownRemark.html,
            }}
          />
        </Text>
      </Container>
    </Box>
    <Spring items={slideShowItems} />
    {/* <Box>
      <Container>
        <PrimaryHeading>Products</PrimaryHeading>
        <Gallery items={data.homeJson.gallery} />
      </Container>
    </Box> */}
    <Box bg="grey" key="contact-us">
      <Container>
        <PrimaryHeading>Contact Us</PrimaryHeading>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} px={[3, 4]} py={4}>
            <Text fontWeight="bold" mb={2} fontSize={[2, 3]}>
              Herb & Bloom
            </Text>
            <Text fontSize={[2, 3]}>
              Avro House - Unit 105
              <br />5 Havelock Terrace
              <br />
              London
              <br />
              SW8 4AS
              <br />
            </Text>
            <Flex mt={3}>
              <Flex key="phone" mr={2} alignItems="center">
                <Phone />
                <Text ml={2} fontSize={[2, 3]}>
                  078 7611 6588
                </Text>
              </Flex>
              <Flex key="email" alignItems="center">
                <Mail />
                <Text ml={2} fontSize={[2, 3]}>
                  078 7611 6588
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            width={[1, 1 / 2]}
            css={{
              position: 'relative',
              minHeight: '50vh',
              // border: `1px solid ${theme.colors.grey}`,
            }}
          >
            <Map />
          </Box>
        </Flex>
      </Container>
    </Box>
    <Box bg="blue" key="footer">
      <Container>
        <Flex justifyContent="space-around" p={3}>
          <Box>
            <Instagram color="white" />
          </Box>
          <Box>
            <Facebook color="white" />
          </Box>
          <Box>
            <Twitter color="white" />
          </Box>
        </Flex>
      </Container>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.object,
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
