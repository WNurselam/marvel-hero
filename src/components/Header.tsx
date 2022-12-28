import React from 'react'
import { Center } from '@chakra-ui/react'
import Logo from '../assets/marvel.jpg';
import { Image } from '@chakra-ui/react'


function Header() {
  return (
    <Center>
      <Image src={Logo} height="150px" />
    </Center>
  )
}

export default Header