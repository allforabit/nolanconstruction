import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Box } from 'components/elements';
import { Menu } from 'react-feather';
import { MobileOnly } from './responsive';
import { DesktopMenu } from './desktop-menu';

const Nav = ({ handleMenuIconClick }) => (
  <Box p={3}>
    <MobileOnly>
      <Menu color="white" onClick={handleMenuIconClick} />
    </MobileOnly>
    <DesktopMenu />
  </Box>
);

Nav.propTypes = {
  handleMenuIconClick: PropTypes.func.isRequired,
};

const Header = ({ title, handleMenuIconClick, ...props }) => (
  <Box {...props}>
    {/* <Box
      bg="black"
      css={{
        opacity: 0.25,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
      }}
    /> */}
    <Box bg="blue">
      <Nav handleMenuIconClick={handleMenuIconClick} />
    </Box>
  </Box>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleMenuIconClick: PropTypes.func.isRequired,
};

export default Header;
