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

import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

export const modalTheme = defineMultiStyleConfig({
    defaultProps: {
        size: 'xl',
        variant: 'purple',
    },
})

type CharProps = {
    character: characterModel
}

const CreateModal = ({ character }: CharProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <Box>
            <Button variant='solid' colorScheme='blue' onClick={onOpen}>Character About</Button>
            <Modal isCentered size="md" colorScheme="red" isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <Button onClick={onOpen}>Open</Button>
                {overlay}
                <ModalContent>
                    <ModalHeader color="whatsapp.700">{character.name}</ModalHeader>
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