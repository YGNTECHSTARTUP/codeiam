
import React from 'react'
import { CarouselPlugin } from './comp/Carousal'
import AboutUs from './comp/AboutUs'
import ChapterComp from './comp/ChapterComp'
import { ActivitiesComp } from './comp/ActivitiesComp'
import { TestinomialComp } from './comp/TestinomialComp'

const page = () => {
  return (
    <div>
      <div className='overflow-hidden'>
      <CarouselPlugin/>
      <AboutUs/>
      <ChapterComp/>
      <ActivitiesComp/>
      <TestinomialComp/>
      </div>
    
    </div>
  )
}

export default page