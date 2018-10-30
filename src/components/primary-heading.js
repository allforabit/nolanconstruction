import React from 'react';
import IO from 'components/io';
import { Heading, Box } from '../components/elements';
import PropTypes from 'prop-types';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
export const PrimaryHeading = ({ children }) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Box css={{ position: 'relative' }}>
        <Heading
          bg="blue"
          color="white"
          px={4}
          py={2}
          fontSize={8}
          css={{
            transition: 'all 500ms ease',
            opacity: isVisible ? 1 : 0,
            textTransform: 'uppercase',
            transform: isVisible ? 'scale(1)' : 'scale(2)',
          }}
        >
          {children}
        </Heading>
      </Box>
    )}
  </IO>
);

PrimaryHeading.propTypes = {
  children: PropTypes.node.isRequired,
};
