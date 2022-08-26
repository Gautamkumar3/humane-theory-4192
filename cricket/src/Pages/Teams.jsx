import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Teams = () => {
    return (
        <Box width={"30%"} m="auto" mt={10} textAlign="center">
            <Heading>Teams Page Under construction</Heading>
            <Link to="/">
                <Text color="blue" fontSize="xl" fontWeight="bold" my={5}>Back to Home page</Text>
            </Link>
            <Box>.</Box>
        </Box>
    )
}

export default Teams
