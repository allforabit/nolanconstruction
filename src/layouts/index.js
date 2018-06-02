// TODO use root component
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import './stylesheet.css'

import {Provider, Root} from 'rebass';

const theme = {
  fonts: {
    // sans: '"Avenir Next", Helvetica, sans-serif',
    sans: 'italian_plate_no2_condensedLt'
  },
  fontSizes: [
    12, 16, 24, 36, 48, 72
  ],
  colors: {
    blue: "black"
  }
}

const TemplateWrapper = ({ children }) => (
  <Provider theme={theme}>
    <Root>
    <Helmet title="Herb & Bloom" />
    <Navbar />
    <div>{children()}</div>
    </Root>
  </Provider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
