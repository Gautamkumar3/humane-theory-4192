import React from 'react'
import { Badge, Box, Flex, Grid, GridItem, HStack, Image, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const MatchSummary = () => {
    return (
        <Box background="#172132" w="70%" m="auto" my={7}>
            <Flex color="white" justify={"space-between"} padding="1rem">
                <Text>MATCH SUMMARY</Text>
                <ChevronRightIcon fontSize="25px" />
            </Flex>

            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem w='100%'  >
                    <Box>
                        <Flex align="center" padding="1rem">
                            <Image h="140px" src="https://images.cricket.com/players/66818_headshot_safari.png" />
                            <VStack marginLeft={8}>
                                <HStack >
                                    <Image w="30px" src="https://images.cricket.com/teams/4_flag_safari.png" />
                                    <Text color="white">Shubman Gill</Text>
                                </HStack>
                                <HStack paddingTop="10px">
                                    <Badge>130 (97)</Badge>
                                    <Badge>6s 1</Badge>
                                    <Badge>4s 15</Badge>
                                </HStack>
                            </VStack>
                        </Flex>
                        <hr />
                        <Flex align="center" padding="1rem">
                            <Image h="140px" src="https://www.cricket.com/placeHodlers/playerAvatar.png" />
                            <VStack marginLeft={8}>
                                <HStack >
                                    <Image w="30px" src="https://images.cricket.com/teams/10_flag_safari.png" />
                                    <Text color="white">Brad Evans</Text>
                                </HStack>
                                <HStack paddingTop="10px">
                                    <Badge>28 (36)</Badge>
                                    <Badge>5/54 (10)</Badge>
                                </HStack>
                            </VStack>
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem w='100%' border="1px solid gray" bg='white'>
                    <Box>
                        <Flex color="black" justify={"space-between"} padding="1rem" fontWeight="bold">
                            <HStack >
                                <Image w="30px" src="https://images.cricket.com/teams/4_flag_safari.png" />
                                <Text>India</Text>
                            </HStack>
                            <Text> <span style={{ color: "#a70e13" }}> 289/8 </span>(50.0)</Text>
                        </Flex>
                        <SimpleGrid columns={2} spacing={1}>
                            <Box padding="0.5rem">
                                <HStack>
                                    <Text color="gray">Shubman Gill</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">130</Text>
                                </HStack>
                                <HStack marginTop="10px">
                                    <Text color="gray">Ishan Kishan</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">50</Text>
                                </HStack>
                            </Box>
                            <Box padding="0.5rem" borderLeft="0.5px solid gray">
                                <HStack>
                                    <Text color="gray">Brad Evans</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">5/54</Text>
                                </HStack>
                                <HStack marginTop="10px">
                                    <Text color="gray">Victor Nyauchi</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">1/48</Text>
                                </HStack>
                            </Box>
                        </SimpleGrid>
                        <br />
                        <hr />
                        <Flex color="black" justify={"space-between"} padding="1rem" fontWeight="bold">
                            <HStack >
                                <Image w="30px" src="https://images.cricket.com/teams/10_flag_safari.png" />
                                <Text>ZIMBABWE</Text>
                            </HStack>
                            <Text> <span style={{ color: "#a70e13" }}> 276/10 </span>(49.3)</Text>
                        </Flex>
                        <SimpleGrid columns={2} spacing={1}>
                            <Box padding="0.5rem">
                                <HStack>
                                    <Text color="gray">Sikandar Raza</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">115</Text>
                                </HStack>
                                <HStack marginTop="10px">
                                    <Text color="gray">Sean Williams</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">45</Text>
                                </HStack>
                            </Box>
                            <Box padding="0.5rem" borderLeft="0.5px solid gray">
                                <HStack>
                                    <Text color="gray">Avesh Khan</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">3/66</Text>
                                </HStack>
                                <HStack marginTop="10px">
                                    <Text color="gray">Axar Patel</Text>
                                    <Spacer />
                                    <Text fontWeight="bold">2/30</Text>
                                </HStack>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default MatchSummary
