import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Criclytics from '../Pages/Criclytics'
import ErrorPage from '../Pages/ErrrorPage'
import Fantacy from '../Pages/Fantacy'
import Home from '../Pages/Home'
import NewsPage from '../Pages/NewsPage'
import Players from '../Pages/Players'
import Schedule from '../Pages/Schedule'
import Series from '../Pages/Series'
import Teams from '../Pages/Teams'
import Videos from '../Pages/Videos'



const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fantacy" element={<Fantacy />} />
            <Route path="/criclystics" element={<Criclytics />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/series" element={<Series />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/players" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AllRoutes
