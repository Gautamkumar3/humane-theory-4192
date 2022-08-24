import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const DataDigest = () => {

    const [avatar, setAvatar] = useState([])

    useEffect(() => {
        axios.get("https://gautam-todos-api.herokuapp.com/avatar?_page=1&_limit=5").then((res) => {
            setAvatar(res.data)
        }).catch((er) => {
            console.log(er)
        })
    }, [])

    return (
        <Box width={["90%", "80%", "70%"]} margin="auto" background="white" padding="10px" boxShadow='xs' p='6' rounded='md' bg='white' my="20px">
            <Text fontWeight="bold" mb={5}>DATA DIGEST</Text>
            <Flex gap={4}>
                {
                    avatar.map((item) => {
                        return (
                            <Box key={item.id}>
                                <Image w="200px" src={item.img} alt="offer_pic" />
                            </Box>
                        )
                    })
                }
            </Flex>
        </Box >
    )
}

export default DataDigest





















// https://gautam-todos-api.herokuapp.com/avatar