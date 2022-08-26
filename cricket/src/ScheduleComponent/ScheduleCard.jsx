import { Badge, Box, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const ScheduleCard = ({ type = "ODI", namea, imga, nameb, imgb, status, date, name, venue }) => {

    let day = name.split(",")[1]
    let x = new Date().toDateString()

    const [current, setCurrent] = useState([])


    useEffect(() => {
        setCurrent(x)
    }, [])

    return (


        <>
            <Box border="1px solid gray" bg="whiteAlpha.800" padding="1rem" borderRadius="5px">
                <HStack mb={2}>
                    <Badge bg="gray.500" p="3px" borderRadius="5px" color="white">{type}</Badge>
                    <Text>{status}</Text>
                </HStack>
                <HStack mb={2}>
                    <Image src="https://www.cricket.com/svgs/location-icon.svg" alt="location-logo" />
                    <Text>{venue = venue.split(",")[1]}</Text>
                </HStack>
                <Flex gap={12} mb={2}>
                    <HStack>
                        <Image w={8} src={imga} alt="location-logo" />
                        <Text>{namea}</Text>
                    </HStack>
                    <Text>{day}</Text>
                </Flex>
                <Flex gap={12} mb={2}>
                    <HStack>
                        <Image w={8} src={imgb} alt="location-logo" />
                        <Text>{nameb}</Text>
                    </HStack>
                    <Text>{day}</Text>
                </Flex>
                <Badge fontSize="10px" px="10px" py="3px" borderRadius="8px" bg="#feead9" fontWeight="light">{current}</Badge>
            </Box>
        </>

    )
}

export default ScheduleCard
