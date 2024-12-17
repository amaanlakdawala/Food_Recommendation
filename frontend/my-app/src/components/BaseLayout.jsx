import React from 'react'
import { Outlet } from 'react-router-dom'
import RestaurantNavbar from './RestaurantNavbar'
import Footer from './Footer'

function BaseLayout() {
  return (
    <>
    
    <Outlet />
    <Footer />
    </>
  )
}

export default BaseLayout