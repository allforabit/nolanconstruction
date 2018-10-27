import React from 'react'
import Link from './link'
import { Box } from 'rebass'
import Container from './container'

const Header = ({ siteTitle }) => (
  <Box bg="blue" mb={2}>
    <Container py={4} px={2}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          color="white"
          css={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </Box>
)

export default Header
