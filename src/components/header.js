import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Box } from 'components/elements';
import { Menu } from 'react-feather';
import { MobileOnly } from './responsive';

const Nav = ({ handleMenuIconClick }) => (
  <Box p={3}>
    <MobileOnly>
      <Menu color="white" onClick={handleMenuIconClick} />
    </MobileOnly>
  </Box>
);

Nav.propTypes = {
  handleMenuIconClick: PropTypes.func.isRequired,
};

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, handleMenuIconClick, ...props }) => (
  <Box {...props}>
    <AnimatedContainer>
      <Box bg="blue">
        <Nav handleMenuIconClick={handleMenuIconClick} />
      </Box>
    </AnimatedContainer>
  </Box>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleMenuIconClick: PropTypes.func.isRequired,
};

export default Header;
