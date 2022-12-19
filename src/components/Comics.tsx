import React from 'react'
import { useState, useEffect } from 'react'
import Comic from '../model/comicsModel';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Flex, VStack, Text, HStack } from '@chakra-ui/react'
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

    console.log(comics);

    return (
        <div>
            {
                comics?.map((comic) => (
                    <VStack>  
                        <LazyLoadImage
                        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                        alt={`image of ${comic.name}`}
                        effect="blur"
                        style={{
                            width: "320px",
                            height: "420px",
                        }}
                    />
                     <Text color="red">{comic.title}</Text>                 
                    </VStack>
                ))
            }</div>
    )
}

export default Comics