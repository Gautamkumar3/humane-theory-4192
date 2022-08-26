import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fantacy from '../Pages/Fantacy'
import Home from '../Pages/Home'
import Players from '../Pages/Players'
import Schedule from '../Pages/Schedule'
import Teams from '../Pages/Teams'
import Videos from '../Pages/Videos'



const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fantacy" element={<Fantacy />} />
            <Route path="/criclystics" element={<h1>cickete</h1>} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/series" element={<h1>SEries</h1>} />
            <Route path="/news" element={<h1>schedule</h1>} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/players" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
        </Routes>
    )
}

export default AllRoutes
