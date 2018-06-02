// TODO use root component
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'

// Reset and fonts
import './style.css'

import {Provider, Root, Box} from 'rebass';

const theme = {
  fonts: {
    sans: '"Avenir Next", Helvetica, sans-serif',
    // sans: 'italian_plate_no2_condensedLt'
  },
  fontSizes: [
    12, 16, 24, 36, 48, 72
  ],
  colors: {
    blue: "#021C72",
    purple: "#D900FF",
    grey: "#EFECE1"
  }
}

const TemplateWrapper = ({ children }) => (
  <Provider theme={theme}>
    <Root fontFamily="sans">
      <Helmet title="Herb & Bloom" />
      <Box bg="blue">
        <Navbar/>
      </Box>
      <Box>{children()}</Box>
    </Root>
  </Provider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
