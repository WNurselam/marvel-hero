import React from 'react'
import { Heading } from '@chakra-ui/react'

function Header() {
  return (
    <Heading as='h4' size='4xl' noOfLines={1} m="5" color="orange.500">
     Marvel Characters
    </Heading>
  )
}

export default Header