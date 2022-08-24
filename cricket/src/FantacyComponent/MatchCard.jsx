import { Badge, Box, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const MatchCard = () => {
    return (
        <Box border="2px solid red" padding="0.5rem" textAlign="center">
            <Container maxW='sm'>
                <Text>March 24, The Hundred 2022</Text>
                <Flex justify="space-between" align="center" paddingX="1rem">
                    <HStack>
                        <Image boxSize="50px" borderRadius='full' src='https://images.cricket.com/teams/2038_flag_safari.png' alt='team_logo' />
                        <Text>LNS</Text>
                    </HStack>
                    <Badge h="20px">Vs</Badge>
                    <HStack>
                        <Image boxSize="50px" borderRadius='full' src='https://images.cricket.com/teams/2038_flag_safari.png' alt='team_logo' />
                        <Text>LNS</Text>
                    </HStack>
                </Flex>
                <Badge>August 19</Badge>
                <Flex justify="center">
                    <Text>August 26 2022</Text>
                    <Text>London</Text>
                </Flex>
            </Container>
        </Box>
    )
}

export default MatchCard
