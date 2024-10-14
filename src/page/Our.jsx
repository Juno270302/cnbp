import React from 'react'
import { Outlet } from 'react-router-dom'

const Our = () => {
  return (
    <div className=' py-10 px-[10rem] max-sm:px-[3rem] max-md:px-[3rem] max-lg:px-[3rem] max-xl:px-[5rem] max-2xl:px-[7rem] max-xl:py-4 max-2xl:py-5'>
    <h1>Our Page</h1>
    {/* Nested routes will be rendered here */}
    <Outlet />
  </div>  )
}

export default Our