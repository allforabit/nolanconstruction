import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './elements';

export const CarouselItem = ({ children }) => {
  return <Box>{children}</Box>;
};

CarouselItem.propTypes = {
  children: PropTypes.node,
};

export class Carousel extends React.Component {
  render() {
    return (
      <Box>
        {this.props.items.map((item, idx) => (
          <CarouselItem key={idx}>{item}</CarouselItem>
        ))}
      </Box>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};
