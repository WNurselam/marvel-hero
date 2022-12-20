import React from 'react'
import { Heading } from '@chakra-ui/react'

function Header() {
  return (
    <Heading as='h1' size='4xl' noOfLines={1} m="5" color="orange.500">
      Marvel Hero
    </Heading>
  )
}

export default Header