
import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RotateImage = () => {
    return (
        <Box position="relative" w="70%" m="auto" my={1}>
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
    )
}

export default RotateImage




