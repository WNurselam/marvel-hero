import React from 'react'
import { useCurrentCharacter } from './CurrentCharacter';
import CharacterCard from './CharacterCard';
import { Grid } from '@chakra-ui/react';

const CharacterList = () => {
    const { characters } = useCurrentCharacter();
     //console.log(characters);
    return (
        <Grid templateColumns="4fr 4fr 4fr 4fr" >{characters && characters.map((character) => (         
            <CharacterCard character={character} key={character.id} />         
        ))}</Grid>
    )
}

export default CharacterList;