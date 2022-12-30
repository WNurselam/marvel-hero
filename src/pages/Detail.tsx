import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import characterModel from '../model/charactersModel'
import { Flex, Text, Card, Stack, CardBody, Heading, Divider} from '@chakra-ui/react'
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Comics from '../components/Comics'
import { WarningTwoIcon, ArrowBackIcon } from '@chakra-ui/icons'
import SeriesMarvel from '../components/Series'



const Detail = () => {
  let Back = useNavigate()
  const [character, setCharacter] = useState<characterModel[]>([])
  const { id } = useParams();

  const arrowBack = () => {
    Back("/", { replace: false }) 
  }

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
      <ArrowBackIcon onClick={arrowBack} w={10} h={10} />
      {
        character && character.map((char) => (
          <Card key={char.id} boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
           background="blackAlpha.500" m="15" direction={{ base: 'column', sm: 'row' }}
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
                <Heading m="4" color="whatsapp.200" size='lg'>{char.name}</Heading>
                <Text py='2' m="4" color="whatsapp.200">
                  {char.description ? char.description : <Text>This Character has not description <WarningTwoIcon w={8} h={8} color="red.500" /> </Text>}
                </Text>
              </CardBody>
               
            </Stack>
          </Card>
        ))
      }
      <Heading m="25">COMICS</Heading>
      <Comics/>
      <Divider m="25" />
      <Heading m="25">SERIES</Heading>
      <SeriesMarvel/>
    </Flex >

  )
}

export default Detail
