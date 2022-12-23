import React from 'react'
import { useCurrentCharacter } from './CurrentCharacter';
import CharacterCard from './CharacterCard';
import { Center, Flex,Grid,Skeleton,Text } from '@chakra-ui/react';

const CharacterList = () => {
    const { characters} = useCurrentCharacter();
    
    return (
        <Flex justifyContent="space-evenly" flexWrap="wrap">{characters && characters.map((character) => (         
            <CharacterCard character={character} key={character.id} />         
        ))}</Flex>
    )
}

export default CharacterList;