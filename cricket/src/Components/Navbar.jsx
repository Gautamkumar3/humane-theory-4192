import { Box, Container, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import NavbarDropdown from './NavbarDropdown'
import NavCard from './NavCard'

const navData = [
    {
        logo: "https://www.cricket.com/svgs/icons/frc.svg",
        title: "Fantasy Centre",
        to: "/fantacy"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/criclytics-icon.svg",
        title: "Criclystics",
        to: "/criclystics"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/schedule-icon.svg",
        title: "Schedule",
        to: "/schedule"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/series-icon.svg",
        title: "Series",
        to: "/series"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/news-and-articles-icon.svg",
        title: "News",
        to: "/news"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/video-icon.svg",
        title: "Videos",
        to: "/videos"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/players-icon.svg",
        title: "Players",
        to: "/players"
    },
    {
        logo: "https://www.cricket.com/svgs/icons/teams-icon.svg",
        title: "Teams",
        to: "/teams"
    }
]



const Navbar = () => {
    return (
        <Container maxW='container.xll' bg='black' color='white' padding="1rem" position="sticky" top="0px" opacity="2" zIndex="5" >
            <Flex justifyContent="right" w="70%" m="auto">
                <Link to="/">
                    <Box padding="1rem">
                        <Image
                            src='https://www.cricket.com/cricket.com.svg'
                            alt='logo'
                        />
                    </Box>
                </Link>
                <Spacer />
                <Flex align="center" textAlign="center" w="70%" justify={"space-around"}>

                    {navData.map((el, i) => <NavCard key={i + 1} logo={el.logo} title={el.title} to={el.to} />)}
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
