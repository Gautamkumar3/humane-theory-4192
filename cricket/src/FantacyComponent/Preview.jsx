import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Preview = () => {
    return (
        <>
            <Text ml={10} fontWeight="bold" color="whiteAlpha.800" >FANTASY PREVIEWS</Text>
            <SimpleGrid columns={[1, 2]} spacing={10} p="1rem" color={"whiteAlpha.800"}>
                <Flex gap={5}>
                    <Box maxW="200px" >
                        <Image borderRadius="10px" src="https://images-cricketcom.imgix.net/news-1661337129569" alt="img" />
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} h="50px">Fantasy: Bank on Root, Rabada and Anderson to deliver</Text>
                        <Text fontSize="sm">Here are a few tips that could help you create your fantasy XI for the second Test</Text>
                        <Text fontStyle="italic">cricket.com staff</Text>
                        <Text>29 Aug 2022</Text>
                    </Box>
                </Flex>
                <Flex gap={5}>
                    <Box maxW="200px" >
                        <Image borderRadius="10px" src="https://images-cricketcom.imgix.net/news-1661091020805" alt="img" />
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} h="50px">Fantasy: Finn Allen and bowlers to shine again?</Text>
                        <Text fontSize="sm">Here are a few tips that could help you create your fantasy XI for the third ODI</Text>
                        <Text fontStyle="italic">cricket.com staff</Text>
                        <Text>29 Aug 2022</Text>
                    </Box>
                </Flex>
            </SimpleGrid>
        </>
    )
}

export default Preview
