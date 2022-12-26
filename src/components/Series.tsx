import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import Series from '../model/seriesModel';
import axios from 'axios';
import { Card, CardBody, CardFooter, SimpleGrid,Text } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SeriesMarvel = () =>{
    const [series, setSeries] = useState<Series[]>([]);
    const { id } = useParams();


    useEffect(() => {
        const getSeries = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}/series?ts=1&limit=10&apikey=264d76afeaec8c3e99d43a6aff22e2d1&hash=706b1a916bb9a1c979e40f0a11fcd08f`);
                setSeries(response.data.data.results);
            } catch (error) {
                console.log("Series error", error);
            }
        };

        getSeries();
    }, [id]);

 //console.log("Series is here", series);
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {series?.map((serie) => (
                <Card
                    maxW='xs'
                    background="blackAlpha.500"
                    key={serie.id}
                    _hover={{
                        boxShadow: "10px 10px 47px 0px rgba(7, 77, 99, 0.5)",
                        transition: " 500ms"
                    }}
                    >
                    <CardBody>
                        <LazyLoadImage
                            src={serie.thumbnail.path + "." + serie.thumbnail.extension}
                            alt={`image of ${serie.title}`}
                            effect="blur"
                            style={{
                                width: "200px",
                                height: "300px",
                                boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
                            }} />
                    </CardBody>
                    <CardFooter>
                        <Text color="white">{serie.title}</Text>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    );
}

export default SeriesMarvel