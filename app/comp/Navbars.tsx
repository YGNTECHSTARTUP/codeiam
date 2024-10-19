"use client"
import React from 'react'
import Logo from './Logo'




import MobNav from './MobNav'
import Navlinks from './Navlinks'
const Navbars = () => {
  return (
    
 <div className='flex bg-background/80  h-20 w-full gap-2 border-b-primary border-2 justify-between fixed backdrop-blur-md  top-0 z-50 lg:fixed lg:w-full lg:top-0 lg:z-50'>
      <div>
      <Logo/>
      </div>
        <div className='hidden lg:flex  ' >
        <Navlinks/>
        </div>
        <div className=': lg:hidden flex mt-4 gap-3 mx-3'>
         
         
         <MobNav/> 
        </div>
    </div>
 
   
  )
}

export default Navbars