import { AspectRatio, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const FeaturedVideos = () => {

    const [video, setVideo] = useState([])

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=worldcricket&key=AIzaSyChICCSyHlIjNOozxltHcxDWVYqxHd5X6k").then((res) => {
            setVideo(res.data.items)
        }).catch((er) => {
            console.log(er)
        })
    }, [])



    return (
        <Box width={["90%", "80%", "70%"]} margin="auto" background="white" padding="10px" boxShadow='xs' p='6' rounded='md' bg='white' my="20px">
            <Text fontWeight="bold" mb={5}>FEATURED VIDEOS</Text>
            <SimpleGrid columns={[1, 2, 4]} spacing={5} >

                {video?.map((el, i) => {
                    return <Box key={el.id + i}>
                        <AspectRatio maxW='560px' h="150px" ratio={4 / 3} opacity="0.8">
                            <iframe
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

export default FeaturedVideos
