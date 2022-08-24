import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import MatchCard from './MatchCard'

const UpcomingMatch = () => {

    const [cardData, setcardData] = useState([])

    useEffect(() => {
        axios.get("https://gautam-todos-api.herokuapp.com/data?_page=1&_limit=6").then((res) => {
            setcardData(res.data)
            console.log(res.data)
        }).catch((er) => {
            console.log(er)
        })
    }, [])

    return (
        <Box w="70%" m="auto">
            <Flex h="40px" bg=" #ffb700" align={"center"}>
                <Text ml={10} fontWeight="bold" >FANTASY CENTRE</Text>
            </Flex>
            <SimpleGrid columns={[1, 2]} spacing={3}>
                <MatchCard />
            </SimpleGrid>
        </Box>
    )
}

export default UpcomingMatch
