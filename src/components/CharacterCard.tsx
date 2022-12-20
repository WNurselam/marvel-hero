import React from 'react'
import characterModel from '../model/charactersModel'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button, Card, CardBody, CardFooter, Center, Divider, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



type CharProps = {
    character: characterModel
}
const CharacterCard = ({ character }: CharProps) => {
    return (
        <Flex direction="row" key={character.id} >
            <Card m="15" background="gray.800"> 
                <CardBody>
                    <LazyLoadImage
                        src={character.thumbnail.path + "." + character.thumbnail.extension}
                        alt={`image of ${character.name}`}
                        effect="blur"
                        style={{
                            width: "320px",
                            height: "420px",
                            borderRadius: "15px"
                        }}
                    />
                    <Stack>
                        <Heading size="md" color='#fff'>
                            {character.name}
                        </Heading>
                        
                    </Stack>
                </CardBody>
                <Divider />
                <Center>
                <CardFooter>
                    <Link to={`/character/${character.id}`} >
                        <Button variant='solid' colorScheme='blue'>
                            Character Detail
                        </Button>
                    </Link>
                </CardFooter>
                </Center>
            </Card>          
        </Flex >

    )
}

export default CharacterCard