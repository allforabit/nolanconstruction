import React from 'react'
import { Link as RBLink } from 'rebass'
import { Link as GatsbyLink } from 'gatsby'

const Link = props => <RBLink {...props} as={GatsbyLink} />
export default Link
