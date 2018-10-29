import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from './elements';
import { Box, Image } from './elements';

const GalleyItem = ({ title, copy, image, highlighted, ...rest }) => (
  <Box
    width={[1 / 2, 1 / 4]}
    {...rest}
    css={{
      cursor: 'pointer',
      position: 'relative',
      outline: '1px solid white',
    }}
  >
    <Image
      width={1}
      fluid={image ? image.childImageSharp.fluid : {}}
      alt={title}
    />
    <Box
      bg="blue"
      color="white"
      p={4}
      css={{
        display: 'flex',
        opacity: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: 'transform .1s ease-in-out',
        '&:hover': {
          opacity: 1,
          zIndex: 1,
          transform: 'scale(1.1)',
        },
      }}
    >
      <Box>{copy}</Box>
    </Box>
  </Box>
);

GalleyItem.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

class Gallery extends React.Component {
  state = {
    highlightedImgIdx: null,
  };
  handleMouseOver = highlightedImgIdx => {
    this.setState({ highlightedImgIdx });
  };
  handleMouseOut = () => {
    this.setState({ highlightedImgIdx: null });
  };
  render() {
    return (
      <Flex flexWrap="wrap" css={{ overFlow: 'hidden' }}>
        {this.props.items.map((item, i) => (
          <GalleyItem
            {...item}
            key={i}
            onMouseOver={() => this.handleMouseOver(i)}
            onMouseOut={this.handleMouseOut}
            onFocus={() => this.handleMouseOver(i)}
            onBlur={this.handleMouseOut}
            highlighted={this.state.highlightedImgIdx === i}
          />
        ))}
      </Flex>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
