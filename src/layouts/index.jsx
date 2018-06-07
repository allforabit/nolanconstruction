// TODO use root component
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
  Link,
  Circle
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

class HeaderInner extends React.Component {
  render() {
    const { anim, ...props } = this.props;
    const logoSizes = [12, 14, 16, 18].map(x => x * 16);
    return (
      <Banner
        style={{
          WebkitFontSmoothing: "antialiased"
        }}
        color="white"
        bg="black"
        ratio={2 / 3}
        bgImage={homeBg}
        // backgroundSize="100px 100px"
        style={{
          backgroundPosition: `0 ${anim.bgPos}px`,
          backgroundRepeat: "no-repeat"
        }}
      >
        <Box width={logoSizes} height={100}>
          <Logo size={logoSizes} color="white" />
          <Box mt={5}>
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

const AnimatedInnerHeader = animated(HeaderInner);

class Header extends React.Component {
  state = { bgPos: -10 };
  // constructor(props) {
  //   super(props);
  //   this.bannerDom = React.createRef();
  // }
  componentDidMount() {
    // var h1 = parseInt(this.header.offsetHeight);
    // console.log(this.header, "header");
    window.addEventListener("scroll", this._calcScroll.bind(this));
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this._calcScroll);
  }

  _calcScroll(h1) {
    var _window = window;
    var scrollPos = _window.scrollY;
    this.setState(state => ({ ...state, bgPos: Math.round(scrollPos / 3) }));
    console.log(scrollPos);
  }

  render() {
    const props = this.props;
    const logoSizes = [12, 14, 16, 18].map(x => x * 16);
    const bgPos = this.state.bgPos;

    const to = {
      bgPos
    };

    return (
      <Spring to={to}>
        {anim => <AnimatedInnerHeader native {...props} anim={anim} />}
      </Spring>
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
  <Box bg="grey" color="blue" pb={4}>
    <Container p={3}>
      <Flex flexWrap="wrap" width={1}>
        <Box
          pr={3}
          borderRight="1px solid blue"
          width={[1, null, 2 / 3]}
          mb={[3, null, 0]}
        >
          <Text lineHeight={1.5}>
            <Link href="http://herbandbloom.co.uk">HERB & BLOOM</Link> is a new,
            innovative urban farming business soon to be opening in Battersea.
            Using modern hydroponic agricultural systems we will be delivering
            the freshest, premium culinary herbs & edible flowers to the London
            restaurant industry and local communities.
          </Text>
        </Box>
        <Box width={[1, null, 1 / 3]}>
          <Text lineHeight={1.5} fontSize={1}>
            We'd love to hear from you for any and all enquiries, so please feel
            free to drop us a line at{" "}
            <StyledObfuscate email="info@herbandbloom.co.uk" />
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);

const Footer = props => (
  <Container>
    <Box color="black" mt={3} py={3} fontSize={0}>
      <Divider w={1} borderColor="grey" />
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text>© 2018 HERB AND BLOOM</Text>
        </Box>
        <Box>
          <Circle size={48}>
            <Logo size={32} pt="6px" color="white" />
          </Circle>
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
