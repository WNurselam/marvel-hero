import React from 'react'
import { Box, Text, Button, useDisclosure, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import characterModel from '../model/characterModel';
import { WarningTwoIcon } from '@chakra-ui/icons';


type CharProps = {
    character: characterModel
}

const UseModal = ({ character }: CharProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Text background="blue">
            <Button variant='solid' colorScheme='blue' onClick={onOpen}>Character About</Button>
            <Modal size="xl" variant="red" isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <Button onClick={onOpen}>Open</Button>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color="blackAlpha.600">{character.name}</ModalHeader>
                    <ModalCloseButton color="blackAlpha.800" />
                    <ModalBody color="blackAlpha.800">
                        {character.description ? character.description : <Text>This Character has not description <WarningTwoIcon w={5} h={5} color="red.500" /> </Text>}
                        <Text color='gray.600' mt="4"><Text color='blackAlpha.800' as="span">Modified</Text>: {character.modified}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Link to={`/character/${character.id}`} >
                            <Button variant='solid' colorScheme='blue'>
                                Show More
                            </Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Text>
    )
}

export default UseModal