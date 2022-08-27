import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import CrickMatch from '../CriclyticsCoomponents/CrickMatch'
import RotateImage from '../CriclyticsCoomponents/RotateImage'



const Criclytics = () => {
    return (
        <>
            <Box w="70%" m="auto">
                <RotateImage />
                <CrickMatch />
            </Box>
            <Footer />
        </>
    )
}

export default Criclytics


