// TODO use root component
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import { Logo } from "../components/logo";
import styled from "styled-components";
import { withPrefix } from "gatsby-link";

import homeBg from "../img/home-bg.png";

// Reset and fonts
import "./style.css";
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
  BackgroundImage
} from "rebass";

const theme = {
  fonts: {
    sans: 'anke, "Avenir Next", Helvetica, sans-serif'
    // sans: 'italian_plate_no2_condensedLt'
  },
  fontSizes: [12, 16, 24, 36, 48, 72],
  colors: {
    blue: "#021C72",
    purple: "#D900FF",
    grey: "#EFECE1"
  }
};

const PrimaryButton = styled(Button)({
  transition: "background-color .2s ease-out",
  "&:hover": {
    backgroundColor: "magenta"
  }
});

const SecondaryButton = styled(ButtonOutline)({
  transition: ".2s ease-out",
  transitionProperty: "color, box-shadow",
  backgroundColor: "transparent",
  "&:hover": {
    color: "magenta",
    backgroundColor: "transparent",
    boxShadow: "inset 0 0 0 2px magenta"
  }
});

const Title = styled(Heading)([]);
// TODO make logo resizeable
// TODO sort out header font
// TODO Not resized correctly
const Header = props => (
  <Banner
    style={{
      WebkitFontSmoothing: "antialiased"
    }}
    color="white"
    bg="black"
    ratio={2 / 3}
    bgImage={homeBg}
  >
      <Box width={256} height={100}>
        <Logo size={256} />
        <Box mt={5}>
          <Text textAlign="center">Grown in London.</Text>
          <Text textAlign="center">For London.</Text>
        </Box>
      </Box>
  </Banner>
);

const Header2 = props => <div>Hello</div>;

const BelowHeader = props => (
  <Box bg="grey" p={3}>
    <Text mb={3} >
      Herb & Bloom is a new, innovative urban farming business soon to be
      opening in Battersea. Using modern hydroponic agricultural systems we will
      be delivering the freshest, premium culinary herbs & edible flowers to the
      London restaurant industry and local communities.
    </Text>
  </Box>
);

const TemplateWrapper = ({ children }) => (
  <Provider theme={theme}>
    <Root fontFamily="sans">
      <Helmet title="Herb & Bloom" />
      <Header />
      <BelowHeader />
    </Root>
  </Provider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
