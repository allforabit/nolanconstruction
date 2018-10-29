import React from 'react';
import styled from 'styled-components';
import { Box } from 'components/elements';
import { display } from 'styled-system';

const ResponsiveContainer = styled(Box)(display);

export const MobileOnly = props => (
  <ResponsiveContainer display={['block', 'none']} {...props} />
);
