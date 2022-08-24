import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box background="black" mt={10} padding="1rem" >
            <Flex align={"center"} w="70%" m="auto" height="110px" color={"gray.500"} justify="space-between" p={"1rem"}>
                <Box>
                    <Image src="https://www.cricket.com/svgs/cricket-logo.svg" alt="logo" />
                    <Text fontSize="xs" >Cricket like never before</Text>
                </Box>
                <Box>
                    <HStack>
                        <Text _hover={{ color: "tomato" }}>Terms of use</Text>
                        <Text _hover={{ color: "tomato" }}>Privacy Policy</Text>
                        <Text _hover={{ color: "tomato" }}>Coockies Policy</Text>
                    </HStack>
                </Box>
                <Box>
                    <Flex justify={"right"} gap={3}>
                        <Text> Follow us on </Text>
                        <Image src="https://www.cricket.com/svgs/facebook.svg" />
                        <Image src="https://www.cricket.com/svgs/twitter.svg" />
                        <Image src="https://www.cricket.com/svgs/linkedin.svg" />
                    </Flex>
                    <Text>@ 2020 cricket.com | All rights reserved</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer
