import React from 'react'
import { useState, useEffect } from 'react'
import Comic from '../model/comicsModel';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Flex, VStack, Text, HStack, Heading, Card, CardBody, CardFooter, Center, SimpleGrid } from '@chakra-ui/react'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Comics = () => {
    const [comics, setComics] = useState<Comic[]>([])
    const { id } = useParams();

    useEffect(() => {
        const getComics = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&limit=10&apikey=264d76afeaec8c3e99d43a6aff22e2d1&hash=706b1a916bb9a1c979e40f0a11fcd08f`)
                setComics(response.data.data.results);
            } catch (error) {
                console.log("Comics get error:", error);
            }
        }
        getComics()
    }, [id])

    console.log("Comics is here", comics);

    return (

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {
                comics?.map((comic) => (
                    <Card
                        maxW='sm'
                        background="blackAlpha.500"
                        key={comic.id} >
                        <CardBody>
                            <LazyLoadImage
                                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                                alt={`image of ${comic.name}`}
                                effect="blur"
                                style={{
                                    width: "200px",
                                    height: "300px",
                                    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
                                }}
                            />
                        </CardBody>
                        <CardFooter>
                            <Text color="white">{comic.title}</Text>
                        </CardFooter>
                    </Card>
                ))

            }
        </SimpleGrid>

    )
}

export default Comics