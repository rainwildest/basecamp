import React from 'react'
import HomeBar from './home-bar'

import {
  Box
} from '@chakra-ui/core'

const Layout = (props) => {
  return (
    <Box width='full' height='100%'>
      <HomeBar />
      {props.children}
    </Box>
  )
}

export default Layout
