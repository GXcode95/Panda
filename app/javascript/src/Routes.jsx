import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import Login from './screens/Login'
import Courses from './screens/Courses'
import NotFound from './screens/NotFound'

const RouteList = () => {

  return <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/connection" exact element={<Login />} />
    <Route path="/session" exact element={<Courses />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
}

export default RouteList