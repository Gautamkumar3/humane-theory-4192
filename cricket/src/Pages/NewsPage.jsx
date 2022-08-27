import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import News from '../Components/News'

const NewsPage = () => {
    return (
        <Box>
            <News page={1} limit={15} />
            <Footer />
        </Box>
    )
}

export default NewsPage
