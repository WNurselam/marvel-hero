import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import Series from '../model/seriesModel';
import axios from 'axios';
import { Card, CardBody, CardFooter, Center, SimpleGrid,Text, scaleFadeConfig } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { WarningTwoIcon } from '@chakra-ui/icons';

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
        <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            { series && series.length>0 ? series.map((serie) => (
                <Card
                    maxW='sm'
                    background="blackAlpha.500"
                    key={serie.id}
                    _hover={{
                        boxShadow: "10px 10px 47px 0px rgba(7, 77, 99, 0.5)",
                        transition: " 500ms",
                        scaleFadeConfig:"25px"
                    }}
                    boxShadow='dark-lg'  rounded='md' 
                  
                    >
                    <CardBody>
                        <LazyLoadImage
                            src={serie.thumbnail.path + "." + serie.thumbnail.extension}
                            alt={`image of ${serie.title}`}
                            effect="blur"
                            style={{
                                width: "200px",
                                height: "300px",
                                
                            }} />
                             <Text mt="3" color="white">{serie.title}</Text>
                    </CardBody>
                </Card>
            )):<Text textAlign="center">There are no series with this character <WarningTwoIcon w={8} h={8} color="red.500" /> </Text>}
        </SimpleGrid>
    );
}

export default SeriesMarvel