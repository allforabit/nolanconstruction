import React from 'react';
import { Box } from 'components/elements';

export const Container = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      maxWidth: '1024px',
      overflow: 'hidden',
    }}
  />
);
