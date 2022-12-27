import React from 'react'
import characterModel from '../model/charactersModel'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card, CardBody, CardFooter, Center, Divider, Flex, Heading, Stack, Grid, Skeleton } from '@chakra-ui/react';
import { useCurrentCharacter } from './CurrentCharacter';
import UseModal from './Modal';


type CharProps = {
    character: characterModel
}
const CharacterCard = ({ character }: CharProps) => {

    const { loading } = useCurrentCharacter();
    if (!character || loading) {
        return (
            <Skeleton>
                <Flex
                    bg="rgb(60, 62, 68)"
                    borderRadius="0.5rem"
                    boxShadow="rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;"
                    width={320}
                    height={420}
                ></Flex>
            </Skeleton>
        );
    }

    return (
        <Flex direction="row"  >
            <Grid templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
            ]}
                gap={7}></Grid>
            <Card m="4" background="blackAlpha.500" width="xs"
                _hover={{
                    boxShadow: "10px 10px 47px 0px rgba(99, 99, 99, 0.5)",
                    transition: "400ms"

                }}
            >
                <CardBody>
                    <LazyLoadImage
                        src={character.thumbnail.path + "." + character.thumbnail.extension}
                        alt={`image of ${character.name}`}
                        effect="blur"
                        style={{
                            width: "270px",
                            height: "320px",
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
                        <UseModal character={character} />
                    </CardFooter>
                </Center>
            </Card>
        </Flex >

    )
}

export default CharacterCard