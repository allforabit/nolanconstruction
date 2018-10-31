import React from 'react';
import PropTypes from 'prop-types';
import '../fonts/fonts.css';
import { Box, Button, Flex } from './elements';
import { DesktopOnly } from './responsive';
import { withTheme } from 'styled-components';
import Scroll, { scroller } from 'react-scroll';

const DesktopMenuItem = ({ children, anchor, onClick }) => (
  <Box>
    <Button
      color="white"
      fontFamily="heading"
      fontWeight="normal"
      variant="menu"
      letterSpacing={1.1}
      fontSize={5}
      onClick={evt => {
        evt.preventDefault();
        scroller.scrollTo(anchor, {
          duration: 200,
          delay: 0,
          smooth: true,
          offset: -100,
          container: 'site-layout',
        });
      }}
      css={{
        background: 'none',
        textTransform: 'uppercase',
        cursor: 'pointer',
        outline: 'none',
        opacity: 0.75,
        '&:hover': {
          opacity: 0.85,
        },
      }}
    >
      {children}
    </Button>
  </Box>
);

DesktopMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  anchor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const DesktopMenuBase = ({
  theme: {
    colors: { blue },
  },
}) => (
  <DesktopOnly color="white">
    <Flex
      fontSize={3}
      justifyContent="flex-end"
      css={{
        height: '100%',
      }}
    >
      <DesktopMenuItem anchor="home">Home</DesktopMenuItem>
      <DesktopMenuItem anchor="about">About Us</DesktopMenuItem>
      <DesktopMenuItem anchor="contact">Contact</DesktopMenuItem>
    </Flex>
  </DesktopOnly>
);

DesktopMenuBase.propTypes = {
  theme: PropTypes.object,
};

DesktopMenuBase.displayName = 'Mobile menu';

export const DesktopMenu = withTheme(DesktopMenuBase);
