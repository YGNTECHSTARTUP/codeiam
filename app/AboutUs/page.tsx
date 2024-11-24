// import { Timeline } from '@/components/ui/timeline'
import React from 'react'
import { Timelines } from '../comp/Timeline'
import { StickyScrollReveal } from '../comp/Stickyscroll'
import AboutUs from '../comp/AboutUs'

const page = () => {
  return (
    <div>
        {/* <Timeline/> */}
        <AboutUs/>
        <div className="max-w-7xl mx-auto py-20 -mt-[5%] px-4 md:px-8 lg:px-10">
        <h2 className="mb-4 text-black dark:text-white  text-4xl  container  colgra  md:text-6xl lg:text-7xl font-bold tex ">
            Building a Collaborative Tech Community
        </h2>
        
      </div>
      
        <StickyScrollReveal/>
        <Timelines/>
    </div>

  )
}

export default page