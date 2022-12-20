import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import characterModel from '../model/charactersModel';


export const useCurrentCharacter = () => {

  const [characters, setCharacters] = useState<characterModel[]>([]);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const response = await axios(
                    `https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&apikey=264d76afeaec8c3e99d43a6aff22e2d1&hash=706b1a916bb9a1c979e40f0a11fcd08f`
                );
                
                setCharacters(response.data.data.results);
            } catch (error) {
                console.log("Fetch data error:",error);            
             }
        };
        getCharacter();
    }, []);

    //console.log("Is here ",characters);
    return (
        {
            characters,
            setCharacters
        }
    )
}



