import { AspectRatio, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const FantacyVideos = () => {

    const [video, setVideo] = useState([])

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=cricket%20news&key=AIzaSyChICCSyHlIjNOozxltHcxDWVYqxHd5X6k").then((res) => {
            setVideo(res.data.items)
        }).catch((er) => {
            console.log(er)
        })
    }, [])



    return (
        <Box padding="10px" boxShadow='xs' p='6' rounded='md' color="whiteAlpha.800" mb={-10}>
            <Text fontWeight="bold" mb={5}>FANTACY VIDEOS</Text>
            <SimpleGrid columns={[1, 2, 4]} spacing={5} >

                {video?.map((el, i) => {
                    return <Box key={el.id + i}>
                        <AspectRatio maxW='560px' h="150px" ratio={4 / 3} opacity="0.8" >
                            <iframe
                                style={{ borderRadius: "10px" }}
                                title='naruto'
                                src={`https://www.youtube.com/embed/${el.id.videoId}`}
                                allowFullScreen
                            />
                        </AspectRatio>
                        <Text mt={5} fontSize='sm'>{el.snippet.title}</Text>
                    </Box>
                })}
            </SimpleGrid >
        </Box>
    )
}

export default FantacyVideos
