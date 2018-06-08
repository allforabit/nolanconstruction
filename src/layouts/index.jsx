// TODO use root component
// TODO add support for IE
// import "babel-polyfill";
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import { Logo } from "../components/logo";
import { Container } from "../components/container";
import { Textarea } from "../components/textarea";
import styled, { injectGlobal } from "styled-components";
import { withPrefix } from "gatsby-link";
import Obfuscate from "react-obfuscate";
import { Spring, animated } from "react-spring";

import homeBg from "../img/home-bg.png";
import hbIconImg  from "../img/icon/icon-rgb-colour-no-background-small.png";

import {
  Root,
  Provider,
  Flex,
  Box,
  Banner,
  Heading,
  Text,
  Lead,
  Button,
  ButtonOutline,
  Pre,
  BlockLink,
  Image,
  BackgroundImage,
  Column,
  Row,
  Divider,
  Link
} from "rebass";

import sys from "@allforabit/system-components";

import "./fonts.css";

injectGlobal`
body {
  margin: 0;
}
* {
  box-sizing: border-box
}
`;

export const breakpoints = [32, 48, 64, 80].map(n => n + "rem");

const theme = {
  fonts: {
    sans: 'ankeregular, "Avenir Next", Helvetica, sans-serif',
    heading: "italian_plate_no2_condensedLt"
  },
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 16, 24, 36, 48, 72],
  colors: {
    blue: "#021C72",
    purple: "#D900FF",
    grey: "#EFECE1"
  }
};

const Title = styled(Heading)([]);
// TODO sort out header font
// TODO sort out general font

class Header extends React.Component {
  render() {
    const { style, ...props } = this.props;
    const logoSizes = [12, 14, 16, 18].map(x => x * 16);
    return (
      <Banner
        style={{
          WebkitFontSmoothing: "antialiased"
        }}
        color="white"
        ratio={2 / 3}
        bg="blue"
        // backgroundSize="100px 100px"
      >
        <Box width={logoSizes} height={100}>
          <Logo size={logoSizes} color="white" />
          <Box mt={5} color="purple">
            <Text textAlign="center" fontSize={2}>
              Grown in London.
            </Text>
            <Text textAlign="center" fontSize={2}>
              For London.
            </Text>
          </Box>
        </Box>
      </Banner>
    );
  }
}


const StyledObfuscate = sys({
  is: Obfuscate,
  color: "purple",
  hover: {
    color: "black"
  },
  fontWeight: "bold"
});

const BrandLink = () => (
  <Link href="https://herbandbloom.co.uk">Herb & Bloom</Link>
);

const StyledBrandLink = sys({
  is: Link,
  fontFamily: "heading",
  fontSize: 2,
  textDecoration: "overline"
});

const BelowHeader = props => (
  <Box bg="blue" color="white" pb={4}>
    <Container>
      <Flex flexWrap="wrap" width={1}>
        <Box width={[1, null, 2 / 3]}>
          <Text textAlign="justify">
            HERB & BLOOM is a new,
            innovative urban farming business soon to be opening in Battersea.
            Using modern hydroponic agricultural systems we will be delivering
            the freshest, premium culinary herbs & edible flowers to the London
            restaurant industry and local communities.
          </Text>
        </Box>
        <Box width={[1, null, 1 / 3]} pl={[0, null, 4]} mt={[3, null, 0]}>
          <Text fontSize={1} >
            We'd love to hear from you for any and all enquiries, so please feel
            free to drop us a line at{" "}
            <StyledObfuscate email="info@herbandbloom.co.uk" />
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);

const HBIcon = () => {
  return (
    <Image src={hbIconImg} width={96} />
  );
}

const Footer = props => (
  <Container>
    <Box color="black" mt={3} py={3} fontSize={0}>
      <Divider w={1} borderColor="grey" />
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text>© 2018 HERB AND BLOOM</Text>
        </Box>
        <Box>
          <HBIcon />
        </Box>
      </Flex>
    </Box>
  </Container>
);

const TemplateWrapper = ({ children }) => (
  <Provider theme={theme}>
    <Root fontFamily="sans">
      <Helmet title="Herb & Bloom" />
      <Header />
      <BelowHeader />
      <Footer />
    </Root>
  </Provider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
