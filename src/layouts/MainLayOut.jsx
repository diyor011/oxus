import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

const MainLayOut = () => {
  return (
    <>
      <Navbar/>
      <div className='wrapper'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayOut
