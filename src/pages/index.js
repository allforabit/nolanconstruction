import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { Container } from 'components/container';
import { Image, Box, Flex, Heading } from '../components/elements';
import { Text } from 'rebass';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import { Logo } from '../components/logo';
import { PrimaryHeading } from '../components/primary-heading';
import { ObfuscatedLink } from '../components/obfuscated-link';
import IO from 'components/io';
import mapboxgl from 'mapbox-gl';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'react-feather';
import { Carousel } from '../components/carousel';
import { Element } from 'react-scroll';
import { Icon } from '../components/icon';
import { withTheme } from 'styled-components';

const hasWebGLSupport = () => {
  const canvas = document.createElement('canvas');
  // Get WebGLRenderingContext from canvas element.
  const webgl =
    canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  return webgl ? true : false;
};

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxsZm9yYWJpdCIsImEiOiJjamhhbXNoY3QwcGZhMzBxZ2o2cmt2YnpqIn0.FNihk7OBud6P4ZhrZzJ_8g';

class Map extends React.Component {
  componentDidMount() {
    if (!hasWebGLSupport()) {
      return;
    }
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
    //   this.map.loadImage('https://i.imgur.com/MK4NUzI.png', (error, image) => {
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

const TopBanner = ({ carouselData }) => {
  return (
    <IO rootMargin="-50px">
      {({ isVisible }) => (
        <Flex
          bg="red"
          css={{
            height: '100vh',
          }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Carousel
            items={[
              <Box key="blank" />,
              ...carouselData.map(({ title, image }) => (
                <Box
                  key={image.childImageSharp.fluid}
                  width={1}
                  css={{ height: '100%' }}
                >
                  <Image
                    width={1}
                    fluid={image ? image.childImageSharp.fluid : {}}
                    alt={title}
                    style={{
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                  <Box
                    bg="black"
                    css={{
                      opacity: 0.25,
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                  />
                </Box>
              )),
            ]}
          />
          <Box
            key="logo"
            mx="auto"
            mb={3}
            css={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              top: '50%',
              marginTop: '-150px',
            }}
          >
            <Box width={[200, 300]} mx="auto">
              <Logo color="white" width="100%" height="100%" />
            </Box>
            <Text
              textAlign="center"
              mt={4}
              color="dark-grey"
              fontFamily="sans"
              fontSize={[4, 5]}
            >
              Creative Building Solutions.
            </Text>
          </Box>
        </Flex>
      )}
    </IO>
  );
};

TopBanner.propTypes = {
  carouselData: PropTypes.array.isRequired,
};

const Contact = withTheme(({ theme }) => {
  return (
    <Box bg="grey" key="contact-us">
      <Container bg="white">
        <PrimaryHeading>Contact Us</PrimaryHeading>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} px={[3, 4]} py={4}>
            <Text fontWeight="bold" mb={2} fontSize={[2, 3]} color="off-black">
              Herb & Bloom
            </Text>
            <Text fontSize={[2, 3]} color="off-black">
              Avro House - Unit 105
              <br />5 Havelock Terrace
              <br />
              London
              <br />
              SW8 4AS
              <br />
            </Text>
            <Box mt={3}>
              <Flex key="phone" mb={3} alignItems="center">
                <Phone color={theme.colors['off-black']} />
                <Text ml={2} fontSize={[2, 3]} color="off-black">
                  078 7611 6588
                </Text>
              </Flex>
              <Flex key="email" alignItems="center">
                <Mail color={theme.colors['off-black']} />
                <Text ml={2} fontSize={[2, 3]} color="off-black">
                  <ObfuscatedLink
                    email="info@herbandbloomlondon.co.uk"
                    color="off-black"
                  />
                </Text>
              </Flex>
            </Box>
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
  );
});

const IndexBase = ({ data, theme }) => {
  return (
    <Layout id="site-layout">
      <Element name="home">
        <TopBanner carouselData={data.homeJson.carousel} />
      </Element>
      <Element name="about">
        <Box bg="grey" css={{ minHeight: '1vh' }}>
          <Container>
            <Flex flexWrap={['wrap', 'nowrap']}>
              <Text
                fontFamily="sans"
                color="off-black"
                py={4}
                px={[3, 4]}
                width={[1, 2 / 3]}
                fontSize={2}
                lineHeight={1.25}
                letterSpacing={1.1}
                mb={[3, 4]}
              >
                <Text fontSize={4} mt={2}>
                  Herb & Bloom is London’s most central vertical farm.
                </Text>
                <Text mt={[3, 4]}>
                  We have harnessed state of the art hydroponics technology to
                  cultivate the finest microgreens and microherbs for our local
                  London community.
                </Text>
                <Text mt={[3, 4]}>
                  Quality is at the forefront of our practise, and we harvest
                  our crops on the day of delivery. This means we can guarantee
                  our customers the freshest produce exactly when they need it.
                </Text>
                <Text mt={2}>
                  We promise to deliver quality, flavour and vibrancy with an
                  absolute minimum in associated food miles.
                </Text>
                <Text mt={[3, 4]}>
                  By investing in technological innovation, Herb & Bloom is
                  committed to expanding our range of fresh produce, grown from
                  seed, right in the very heart of the city.
                </Text>
              </Text>
              <Box w={[1, 1 / 3]}>
                <Icon width="100%" height="100%" />
              </Box>
            </Flex>
          </Container>
        </Box>
      </Element>
      {/* <Box>
      <Container>
        <PrimaryHeading>Products</PrimaryHeading>
        <Gallery items={data.homeJson.gallery} />
      </Container>
    </Box> */}
      <Element name="contact">
        <Contact />
      </Element>
      <Box bg="red" key="footer">
        <Container>
          <Flex justifyContent="space-around" p={3}>
            <Box css={{ cursor: 'pointer' }}>
              <a
                href="https://www.instagram.com/herb.and.bloom/"
                target="blank"
              >
                <Instagram color="white" />
              </a>
            </Box>
            <Box css={{ cursor: 'pointer' }}>
              <a
                href="https://www.facebook.com/Herb-Bloom-312946135950787/"
                target="blank"
              >
                <Facebook color="white" />
              </a>
            </Box>
            <Box css={{ cursor: 'pointer' }}>
              <a href="https://twitter.com/HerbandBloom" target="blank">
                <Twitter color="white" />
              </a>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};

IndexBase.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.object,
};

const Index = IndexBase;

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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      carousel {
        title
        copy
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
