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

const CreateModal = ({ character }: CharProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const OverlayOne = () => (
        <ModalOverlay
        bg='none'
        backdropFilter='blur(1px) hue-rotate(90deg)'
        backdropInvert='80%'
        backdropBlur='1px'
        />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    return (
        <Box>
            <Button variant='solid' colorScheme='blue' onClick={onOpen}>Character About</Button>
            <Modal isCentered size="md" variant="purple" isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <Button onClick={onOpen}>Open</Button>
                {overlay}
                <ModalContent>
                    <ModalHeader color="whatsapp.600">{character.name}</ModalHeader>
                    <ModalCloseButton color="white" />
                    <ModalBody color="white">
                        {character.description ? character.description : <Text>This Character has not description <WarningTwoIcon w={5} h={5} color="red.500" /> </Text>}
                        <Text color="white" mt="4"><Text color='whatsapp.400' as="span">Modified</Text>: {character.modified}</Text>
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
        </Box>
    )
}

export default CreateModal;