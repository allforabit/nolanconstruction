import React from 'react';
import Obfuscate from 'react-obfuscate';
import { fontFamily, fontWeight } from 'styled-system';
import styled from 'styled-components';
import { Link as RBLink } from 'rebass';

export const ObfuscatedLink = ({ css, ...props }) => (
  <RBLink as={Obfuscate} color="black" {...props} />
);
