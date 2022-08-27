import { Box } from '@chakra-ui/react'
import React from 'react'
import FeaturedVideos from '../Components/FeaturedVideos'
import Footer from '../Components/Footer'
import FantacyVideos from '../FantacyComponent/FantacyVideos'
import MatchCard from '../FantacyComponent/MatchCard'
import Preview from '../FantacyComponent/Preview'
import UpcomingMatch from '../FantacyComponent/UpcomingMatch'

const Fantacy = () => {
    return (
        <>
            <Box w="70%" m="auto" bg="#172132">
                <UpcomingMatch />
                <Preview />
                <FantacyVideos />
            </Box>
            <Footer />
        </>
    )
}

export default Fantacy
