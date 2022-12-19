import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import characterModel from '../model/charactersModel'
import { Flex, VStack, Text } from '@chakra-ui/react'
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Comics from '../components/Comics'

const Detail = () => {
  const [character, setCharacter] = useState<characterModel[]>([])
  const { id } = useParams();

  useEffect(() => {
    const getComics = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=264d76afeaec8c3e99d43a6aff22e2d1&hash=706b1a916bb9a1c979e40f0a11fcd08f`
        )
        setCharacter(response.data.data.results)
      } catch (error) {
        console.log("Character", error);

      }
    }
    getComics();
  }, [id])

  console.log(character);

  return (
    <Flex direction="column">
      {
        character && character.map((char) => (   
          <VStack>
            <LazyLoadImage
              src={char.thumbnail.path + "." + char.thumbnail.extension}
              alt={`image of ${char.name}`}
              effect="blur"
              style={{
                width: "320px",
                height: "420px",
              }}
            />
            <Text>{char.name}</Text>
            <Text>{char.description}</Text>
           </VStack>
        ))
      }
      <Comics/>
    </Flex >

  )
}

export default Detail