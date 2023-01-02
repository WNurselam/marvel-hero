import React from 'react'
import { Center } from '@chakra-ui/react'
import Logo from '../assets/marvel-red.png';
import { Image } from '@chakra-ui/react'


function Header() {
  return (
    <Center my="-14">
      <Image  src={Logo}  border="4px solid rgb(1, 22, 39)"  height="280px" width="700px" />
    </Center>
  )
}

export default Header