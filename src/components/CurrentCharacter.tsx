import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import characterModel from '../model/charactersModel';


export const useCurrentCharacter = () => {

    const [characters, setCharacters] = useState<characterModel[]>([]);
    let offset = 0;

    const loadMore = () => {
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&offset=${offset}&apikey=264d76afeaec8c3e99d43a6aff22e2d1&hash=706b1a916bb9a1c979e40f0a11fcd08f`)
            .then(({ data }) => {
                const newCharacters: string[] = [];
                data.data.results.forEach((character:string) => newCharacters.push(character));
                setCharacters((prev:any) => {
                    return [...prev, ...newCharacters];
                });
            });

        offset += 30
    }

    const handleScroll = (e:any) => {
        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            loadMore();
        }
    };

    useEffect(() => {
        loadMore();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //console.log("Is here ",characters);
    return (
        {
            characters,
            setCharacters
        }
    )
}



