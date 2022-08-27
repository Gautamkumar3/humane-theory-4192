import { Badge, Box, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'



const CrickCard = ({ name, namea, nameb, imga, imgb, date, type = "ODI" }) => {

    let curr = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })

    return (
        <Box p={4} boxShadow='base' rounded='md' bg='white'>
            <Flex align="center">
                <Badge bg={"whatsapp.200"} color="gray" py="2px" px="5px">{type}</Badge>
                <Text ml={2} color="gray.500" fontSize={"sm"}>{name}</Text>
            </Flex>

            <HStack my={2}>
                <Image w="30px" h="25px" src={imga} alt="abc" />
                <Text fontWeight="bold">{namea}</Text>
                <Text pl={10}>{date}</Text>
            </HStack>
            <HStack my={2}>
                <Image w="30px" h="25px" src={imgb} alt="abc" />
                <Text fontWeight="bold">{nameb}</Text>
                <Text pl={10}>{date}</Text>
            </HStack>
            <Badge fontSize="10px" px="10px" py="3px" borderRadius="8px" bg="#feead9" fontWeight="light">{curr}</Badge>
        </Box>
    )
}

export default CrickCard
