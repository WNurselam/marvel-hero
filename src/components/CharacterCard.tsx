import React from 'react'
import characterModel from '../model/charactersModel'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Flex, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



type CharProps = {
    character: characterModel
}
const CharacterCard = ({ character }: CharProps) => {
    return (
        <Flex direction="row">
            <VStack border="1px solid red">
                <Link to={`/character/${character.id}`} >
                    <LazyLoadImage
                        src={character.thumbnail.path + "." + character.thumbnail.extension}
                        alt={`image of ${character.name}`}
                        effect="blur"
                        style={{
                            width: "320px",
                            height: "420px",
                        }}
                    />
                </Link>
                <Text>{character.name}</Text>
            </VStack>
        </Flex >

    )
}

export default CharacterCard