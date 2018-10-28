import React from 'react';
import PropTypes from 'prop-types';
import { Image, Box } from '../../elements';

const Item = ({ title, copy, image }) => (
  <Box width={[1 / 2, 1 / 4]}>
    <Image
      width={1}
      fluid={image ? image.childImageSharp.fluid : {}}
      alt={title}
    />
    <Box css={{ display: 'none' }}>{copy}</Box>
  </Box>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
