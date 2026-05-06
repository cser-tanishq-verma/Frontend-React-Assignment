import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import HeroComponent from '../Pages/HeroComponent'
import Kitchen from '../RoutingChilderen/Kitchen'

const RoutingComponent = () => {
  return (
    <>
        <BrowserRouter>
            <Header></Header>
            <Navbar></Navbar>
            <Routes>
          <Route path = '/' element={<HomePage></HomePage>}>
            <Route index element={<HeroComponent></HeroComponent>} ></Route>
            <Route path="kitchen" element = {<Kitchen></Kitchen>} ></Route>
          </Route>
          <Route path = '/about' element={<About></About>} ></Route>
          <Route path = '/service' element={<Service></Service>} ></Route>
        </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </>
  )
}

export default RoutingComponent
