import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Box } from '../components/box'

const IndexPage = () => (
  <Layout>
    <Box bg="grey" p={4}>
      <p>
        Herb &amp; Bloom is London’s most central Vertical farm. We grow
        microgreens and microherbs, which are plants in their infancy, this
        means they deliver a far more potent concentration of flavours and
        nutrient content. Our central London location means you will struggle to
        find food that is fresher than this. Loved by chefs and foodies for the
        vibrancy and flavour they add, they are fast growing in popularity with
        the public for all that makes them so interesting, nutritional, tasty
        and sustainable.
      </p>
      <p>
        At Herb &amp; Bloom we use state of the art vertical farming technology
        to deliver the very best quality microgreens to the London community.
      </p>
      <p>
        Using the agricultural systems of the future, we put technology at the
        forefront of our innovation and development, allowing us to grow fresh
        produce, from seed, right in the heart of the city.
      </p>
    </Box>
  </Layout>
)

export default IndexPage
