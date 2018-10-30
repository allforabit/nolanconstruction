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
import styled from 'styled-components';
import { fontFamily, fontWeight } from 'styled-system';

// Primitives (based on rebass)
export const Flex = props => <RBFlex {...props} />;
export const Box = props => <RBBox {...props} />;
export const Image = props => <RBImage {...props} as={Img} />;
export const Button = styled(props => <RBButton {...props} />)(
  fontFamily,
  fontWeight
);
export const Text = props => <RBText {...props} />;
export const Heading = ({ css = {}, ...props }) => (
  <RBHeading
    {...props}
    fontFamily="heading"
    fontSize={[6, 7]}
    css={{ ...css, fontWeight: 'normal' }}
  />
);
