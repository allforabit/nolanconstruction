import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from './head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from '../theme';
import '../fonts/fonts.css';
import { Box, Button, Flex, Text } from './elements';
import { MobileOnly } from './responsive';
import { X } from 'react-feather';
import { Logo } from './logo';

const MobileMenuItem = ({ children }) => (
  <Box>
    <Button bg="grey" color="blue" fontFamily="sans">
      {children}
    </Button>
  </Box>
);

MobileMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const MobileMenuBase = ({
  handleMenuClose,
  theme: {
    colors: { blue },
  },
}) => (
  <MobileOnly
    bg="grey"
    color="blue"
    mr={4}
    css={{ position: 'fixed', top: 0, left: 0, bottom: 0, right: 0 }}
  >
    <Box
      m={3}
      css={{ position: 'absolute', top: 0, right: 0 }}
      onClick={handleMenuClose}
    >
      <X color={blue} />
    </Box>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      css={{ height: '100%' }}
    >
      <Flex
        fontSize={3}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        css={{
          height: '100%',
        }}
      >
        <MobileMenuItem>Home</MobileMenuItem>
        <MobileMenuItem>About Us</MobileMenuItem>
        <MobileMenuItem>Contact</MobileMenuItem>
      </Flex>
      {/* <Flex css={{ opacity: 0.5 }}>
        <Logo color={blue} />
      </Flex> */}
    </Flex>
  </MobileOnly>
);

MobileMenuBase.propTypes = {
  handleMenuClose: PropTypes.func.isRequired,
  theme: PropTypes.object,
};

MobileMenuBase.displayName = 'Mobile menu';

const MobileMenu = withTheme(MobileMenuBase);

class Layout extends React.Component {
  state = {
    menuOpen: false,
  };
  handleMenuOpen = () => {
    this.setState({ menuOpen: true });
  };
  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Text
          fontFamily="sans"
          css={{
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          <GlobalStyle />
          <Head />
          <Header
            title={this.props.data.site.siteMetadata.siteTitle}
            handleMenuIconClick={this.handleMenuOpen}
            css={{
              position: 'absolute',
              top: 0,
            }}
          />
          {this.props.children}
          {this.state.menuOpen && (
            <MobileMenu handleMenuClose={this.handleMenuClose} />
          )}
        </Text>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
