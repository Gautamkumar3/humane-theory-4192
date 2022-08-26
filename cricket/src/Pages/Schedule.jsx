import { Box, Button, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import ScheduleCard from '../ScheduleComponent/ScheduleCard'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const getData = () => {
    return axios.get(`https://gautam-todos-api.herokuapp.com/data`)
}


const Schedule = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData().then((res) => {
            setData(res.data)
        })
    }, [])

    return (
        <Box w="70%" m="auto" p={5} bg="white">
            <Stack direction='row' spacing={4} align='center' my={5}>
                <Button bg='#9b000d' variant='solid' color="white" w="20%">
                    UPCOMING
                </Button>
                <Button colorScheme='teal' variant='outline' w="20%">
                    LIVE
                </Button>
                <Button colorScheme='teal' variant='outline' w="20%">
                    RESULTS
                </Button>
            </Stack>
            <SimpleGrid columns={[2, 3]} spacing={3}>
                {data?.map((el) => <ScheduleCard key={el.id} type={el.matchType} namea={el.namea} imga={el.imga} nameb={el.nameb} imgb={el.imgb} status={el.status} date={el.date} name={el.name} venue={el.venue} />)}
            </SimpleGrid>
        </Box>
    )
}

export default Schedule
