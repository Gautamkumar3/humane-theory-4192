import React from 'react'
import AddImage from '../Components/AddImage'
import DataDigest from '../Components/DataDigest'
import FeaturedVideos from '../Components/FeaturedVideos'
import Footer from '../Components/Footer'
import MatchSummary from '../Components/MatchSummary'
import News from '../Components/News'

const Home = () => {
    return (
        <div>
            <MatchSummary />
            <AddImage />
            <FeaturedVideos />
            <News page={14} limit={6} />
            <DataDigest />
            <Footer />
        </div>
    )
}

export default Home
