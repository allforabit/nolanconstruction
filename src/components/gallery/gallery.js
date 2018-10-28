import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Flex } from '../elements';

const Gallery = ({ items }) => (
  <Flex flexWrap="wrap">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Flex>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
