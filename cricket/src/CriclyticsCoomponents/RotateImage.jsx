
import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

// const RotateImage = () => {
//     return (
//         <Box position="relative" w="70%" m="auto" my={1}>
//             <Box >
//                 <Image w="100%" borderRadius={10} src="https://www.cricket.com/pngs/banner-1.jpg" />
//             </Box>
//             <Box position="absolute" top="10%" right="10%" color="white">
//                 <Heading color="gold" size="3xl">
//                     CRICLYTICS
//                 </Heading>
//                 <VStack lineHeight={5} mt={4}>
//                     <Text fontSize={"xl"} fontWeight="bold">The most powerful</Text>
//                     <Text fontSize={"xl"} fontWeight="bold">predictive cricket algorithm</Text>
//                 </VStack>
//             </Box>
//         </Box>
//     )
// }

// export default RotateImage


import Carousel from 'react-bootstrap/Carousel';

function RotateImage() {
    return (
        <Carousel fade controls={false} style={{ opacity: "100" }}>
            <Carousel.Item>
                <Box position="relative" my={1}>
                    <Box >
                        <Image w="100%" borderRadius={10} src="https://www.cricket.com/pngs/banner-1.jpg" />
                    </Box>
                    <Box position="absolute" top="10%" right="10%" color="white">
                        <Heading color="gold" size="3xl">
                            CRICLYTICS
                        </Heading>
                        <VStack lineHeight={5} mt={4}>
                            <Text fontSize={"xl"} fontWeight="bold">The most powerful</Text>
                            <Text fontSize={"xl"} fontWeight="bold">predictive cricket algorithm</Text>
                        </VStack>
                    </Box>
                </Box>
            </Carousel.Item>
            <Carousel.Item>
                <Box position="relative" my={1}>
                    <Box >
                        <Image w="100%" borderRadius={10} src="https://www.cricket.com/pngs/Banner-2.jpg" />
                    </Box>
                    <Box position="absolute" top="10%" right="10%" color="white">
                        <Box textAlign="right">
                            <Heading color="gold" size="2xl">
                                MATCH
                            </Heading>
                            <Heading color="gold" size="2xl">
                                PREDICTIONS
                            </Heading>
                            <Box lineHeight={5} mt={4}>
                                <Text fontSize={"xl"} fontWeight="bold">Player Projections</Text>
                                <Text fontSize={"xl"} mt={3} fontWeight="bold">Score Predictions</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Carousel.Item>
            <Carousel.Item>
                <Box position="relative" my={1}>
                    <Box >
                        <Image w="100%" borderRadius={10} src="https://www.cricket.com/pngs/Banner-3.jpg" />
                    </Box>
                    <Box position="absolute" top="10%" right="10%" color="white">
                        <Box textAlign="right">
                            <Heading color="gold" size="2xl">
                                COMPREHENSIVE
                            </Heading>
                            <Heading color="gold" size="2xl">
                                STATS
                            </Heading>
                        </Box>
                    </Box>
                </Box>
            </Carousel.Item>
        </Carousel>
    );
}

export default RotateImage;

