import React from 'react'
import characterModel from '../model/characterModel'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Flex, Text, VStack } from '@chakra-ui/react';



type CharProps = {
    character: characterModel
}
const CharacterCard = ({ character }: CharProps) => {
    return (
        <Flex direction="row">   
        <VStack>
            <LazyLoadImage
                src={character.thumbnail.path + "." + character.thumbnail.extension}
                alt={`image of ${character.name}`}
                effect="blur"
                style={{     
                    width: "320px",
                    height: "420px",
                    border:"1px solid #fff"
                }}
            />
            <Text>{character.name}</Text>
            </VStack>  
        </Flex>

    )
}

export default CharacterCard