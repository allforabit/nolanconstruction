import React from 'react';
import { Box as RBBox, Image as RBImage, Flex as RBFlex } from 'rebass';
import Img from 'gatsby-image';

// Primitives (based on rebass)
export const Flex = props => <RBFlex {...props} />;
export const Box = props => <RBBox {...props} />;
export const Image = props => <RBImage {...props} as={Img} />;
