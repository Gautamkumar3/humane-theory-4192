import { Badge, Box, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import CrickCard from './CrickCard'

const getData = () => {
    return axios.get(`https://gautam-todos-api.herokuapp.com/data?q=Match%20not%20started`)
}

const CrickMatch = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getData().then((res) => {
            setData(res.data)
            setLoading(false)
        }).catch((er) => {
            console.log(er)
        })
    }, [])
    console.log(data)

    return (
        <Box >
            <Flex align="center" mt={2} bg="black" h={12}>
                <Text ml={5} color="white">UPCOMING</Text>
            </Flex>
            <SimpleGrid columns={[1, 2]} spacing={2}>
                {data?.map((el) => <CrickCard key={el.key} name={el.name} namea={el.shortnamea} nameb={el.shortnameb} imga={el.imga} imgb={el.imgb} date={el.date} type={el.matchType} />)}
            </SimpleGrid>
        </Box>
    )
}

export default CrickMatch
