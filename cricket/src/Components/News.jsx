import { Box, CircularProgress, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const News = ({ page, limit }) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://gautam-todos-api.herokuapp.com/articles?_page=${page}&_limit=${limit}`).then((res) => {
            setNews(res.data)
            setLoading(false)
        }).catch((er) => {
            console.log(er)
        })
    }, [])

    if (loading) {
        return <Box w="10%" m="auto"><CircularProgress isIndeterminate size='200px' m="auto" color='green.300' /> </Box>
    }

    return (
        <Box width={["90%", "80%", "70%"]} margin="auto" background="white" padding="10px" boxShadow='xs' p='6' rounded='md' bg='white' my="20px">
            <Text fontWeight="bold" mb={5}>NEWS AND ARTICLES</Text>
            <hr />
            {news?.map((el, i) => {
                return <SimpleGrid key={el.title} columns={[1, 2]} spacing={5} mb={5}>
                    <Box >
                        <Image h="200px" w="100%" src={el.urlToImage} />
                    </Box>
                    <Box >
                        <Text fontWeight="bold">{el.title}</Text>
                        <Text color={"gray.500"}>{el.description}</Text>
                        <Flex justify="space-between" mt={2}>
                            <Text fontSize="sm" fontWeight="bold" color="gray.500">Cricket.com staff</Text>
                            <Text fontSize="sm" fontWeight="bold" color="gray.500">27 Aug 2022</Text>
                        </Flex>
                    </Box>
                </SimpleGrid>
            })}

        </Box>
    )
}

export default News


