import { Box, CircularProgress, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CompletedMatchCard from './CompletedMatchCard'
import MatchCard from './MatchCard'


const UpcomingMatch = () => {

    const [cardData, setcardData] = useState([])
    const [completeData, setCompleteData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get("https://gautam-todos-api.herokuapp.com/data?_page=1&_limit=6").then((res) => {
            setcardData(res.data)
            setLoading(false)
        }).catch((er) => {
            console.log(er)
        })
    }, [])



    useEffect(() => {
        setLoading(true)
        axios.get("https://gautam-todos-api.herokuapp.com/data?_page=4&_limit=4").then((res) => {
            setCompleteData(res.data)
            setLoading(false)
        }).catch((er) => {
            console.log(er)
        })
    }, [])


    if (loading) {
        return <Box w="10%" m="auto"><CircularProgress isIndeterminate size='200px' m="auto" color='green.300' /> </Box>
    }

    return (
        <Box >
            <Flex h="40px" bg=" #ffb700" align={"center"}>
                <Text ml={10} fontWeight="bold" >FANTASY CENTRE</Text>
            </Flex>

            <Text ml={10} mt={5} fontWeight="bold" color={"gray.500"} >UPCOMING MATCHES</Text>


            <SimpleGrid columns={[1, 2]} spacing={3} p="1rem">
                {cardData?.map((card) => <MatchCard key={card.id} first_team={card.shortnamea} sec_team={card.shortnameb} a_logo={card.imga} b_logo={card.imgb} time={card.dateTimeGMT} venue={card.venue} name={card.name} />)}
            </SimpleGrid>
            <Text ml={10} mt={5} fontWeight="bold" color={"gray.500"} >COMPLETED MATCHES</Text>
            <SimpleGrid columns={[1, 2]} spacing={3} p="1rem">
                {completeData?.map((card) => <CompletedMatchCard key={card.id} first_team={card.shortnamea} sec_team={card.shortnameb} a_logo={card.imga} b_logo={card.imgb} time={card.dateTimeGMT} venue={card.venue} name={card.name} status={card.status} />)}
            </SimpleGrid>
        </Box>
    )
}

export default UpcomingMatch
