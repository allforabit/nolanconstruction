import React from 'react';
import {
  Box as RBBox,
  Image as RBImage,
  Flex as RBFlex,
  Button as RBButton,
  Text as RBText,
  Heading as RBHeading,
} from 'rebass';
import Img from 'gatsby-image';

// Primitives (based on rebass)
export const Flex = props => <RBFlex {...props} />;
export const Box = props => <RBBox {...props} />;
export const Image = props => <RBImage {...props} as={Img} />;
export const Button = props => <RBButton {...props} />;
export const Text = props => <RBText {...props} />;
export const Heading = ({ css = {}, ...props }) => (
  <RBHeading
    {...props}
    fontFamily="heading"
    fontSize={6}
    css={{ ...css, fontWeight: 'normal' }}
  />
);
