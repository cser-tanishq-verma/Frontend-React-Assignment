import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const RoutingComponent = () => {
  return (
    <BrowserRouter>
        <Header />
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  )
}

export default RoutingComponent
