import { Box, Container, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import NavbarDropdown from './NavbarDropdown'
import NavCard from './NavCard'

const navData = [
    {
        logo: "https://www.cricket.com/svgs/icons/frc.svg",
        title: "Fantasy Centre"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/criclytics-icon.svg",
        title: "Criclystics"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/schedule-icon.svg",
        title: "Schedule"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/series-icon.svg",
        title: "Series"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/news-and-articles-icon.svg",
        title: "News"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/video-icon.svg",
        title: "Videos"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/players-icon.svg",
        title: "Players"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/teams-icon.svg",
        title: "Teams"
    }
]



const Navbar = () => {
    return (
        <Container maxW='container.xll' bg='black' color='white' padding="1rem" position="sticky" top="0px" opacity="2" zIndex="1">
            <Flex justifyContent="right" w="70%" m="auto">
                <Box padding="1rem">
                    <Image
                        src='https://www.cricket.com/cricket.com.svg'
                        alt='logo'
                    />
                </Box>
                <Spacer />
                <Flex align="center" textAlign="center" w="70%" justify={"space-around"}>

                    {navData.map((el, i) => <NavCard key={i + 1} logo={el.logo} title={el.title} />)}
                    <VStack padding="0.5rem" w="10%" _hover={{
                        background: "gray.700",
                    }}>
                        <Image
                            borderRadius='full'
                            marginBottom="-5%"
                            boxSize='20px'
                            src="https://www.cricket.com/svgs/icons/more.svg"
                            alt="More"
                        />
                        <Box height="2rem" fontSize="xs">{<NavbarDropdown />}</Box>
                    </VStack >

                </Flex>
            </Flex>
        </Container >
    )
}

export default Navbar
