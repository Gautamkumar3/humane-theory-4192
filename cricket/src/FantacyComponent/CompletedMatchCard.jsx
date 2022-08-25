import React from 'react'
import { Badge, Box, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'

const CompletedMatchCard = ({ first_team, sec_team, a_logo, b_logo, status, name }) => {
    return (
        <div>
            <Box border="2px solid gray" padding="0.5rem" textAlign="center" bg="#272125" borderRadius={12} color="whiteAlpha.700">
                <Container maxW='sm'>
                    <Text>{name}</Text>
                    <Flex justify="space-between" align="center" paddingX="1rem" mt={1}>
                        <HStack>
                            <Image boxSize="40px" borderRadius='full' src={a_logo} alt='team_logo' />
                            <Text fontWeight="bold" fontSize="1.5rem">{first_team}</Text>
                        </HStack>
                        <Badge h="30px" w="30px" borderRadius="50%" bg="#ffb700"><Text mt="5px">Vs</Text></Badge>
                        <HStack>
                            <Image boxSize="40px" borderRadius='full' src={b_logo} alt='team_logo' />
                            <Text fontWeight="bold" fontSize="1.5rem">{sec_team}</Text>
                        </HStack>
                    </Flex>
                    <Flex mt="8px" justify={"center"}>
                        <Text pr={2} >{status}</Text>
                    </Flex>
                </Container>
            </Box >
            )
        </div>
    )
}

export default CompletedMatchCard
