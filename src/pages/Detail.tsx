import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import characterModel from '../model/charactersModel'
import { Flex, VStack, Text, Card, Stack, CardBody, Heading} from '@chakra-ui/react'
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Comics from '../components/Comics'
import { WarningTwoIcon } from '@chakra-ui/icons'

const Detail = () => {
  const [character, setCharacter] = useState<characterModel[]>([])
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=264d76afeaec8c3e99d43a6aff22e2d1&hash=706b1a916bb9a1c979e40f0a11fcd08f`
        )
        setCharacter(response.data.data.results)
      } catch (error) {
        console.log("Character", error);

      }
    }
    getCharacter();
  }, [id])

  //console.log(character);

  return (
    <Flex direction="column">
      {
        character && character.map((char) => (
          <Card key={char.id} background="gray.800" m="15" direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
          >
            <LazyLoadImage
              src={char.thumbnail.path + "." + char.thumbnail.extension}
              alt={`image of ${char.name}`}
              effect="blur"
              style={{
                maxWidth: "320px",
                height: "420px",
              }}
            />
            <Stack>
              <CardBody>
                <Heading color="whatsapp.200" size='md'>{char.name}</Heading>
                <Text py='2' color="whatsapp.200">
                  {char.description ? char.description : <Text>This Character has not description <WarningTwoIcon w={8} h={8} color="red.500" /> </Text>}
                </Text>
              </CardBody>
            </Stack>
          </Card>
        ))
      }
      <Heading m="25">COMİCS</Heading>
      <Comics/>
    </Flex >

  )
}

export default Detail