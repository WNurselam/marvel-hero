import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <Text>
            <Heading m={10} as='h1' size='4xl' noOfLines={1}>
                Page not found
            </Heading>
            <Button colorScheme='orange'><Link to="/">Back To Homepage </Link></Button>
        </Text>
    )
}

export default Page404
