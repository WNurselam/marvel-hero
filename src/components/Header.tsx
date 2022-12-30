import React from 'react'
import { Center } from '@chakra-ui/react'
import Logo from '../assets/marvel-face.png';
import { Image } from '@chakra-ui/react'


function Header() {
  return (
    <Center>
      <Image  src={Logo}  border="4px solid rgb(1, 22, 39)"  height="180px" width="1500px" />
    </Center>
  )
}

export default Header