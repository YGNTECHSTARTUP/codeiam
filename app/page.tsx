
import React from 'react'
// import { Hero } from './comp/Heros'
import { Timelines } from './comp/Timeline'
import { Hero } from './comp/Hero'
import { FlipWordss } from './comp/FlipWords'
import { FeaturesSection } from './comp/Features'
import { AnimatedTestimonial } from './comp/Testinomial'
import { JoinTeam } from './comp/Jointeam'
// import { CarouselPlugin } from './comp/Carousal'
// import AboutUs from './comp/AboutUs'
// import ChapterComp from './comp/ChapterComp'
// import { ActivitiesComp } from './comp/ActivitiesComp'
// import { TestinomialComp } from './comp/TestinomialComp'
// import Partner from './comp/Partner'

const page = () => {
  return (
    <div>
      {/* <div className='overflow-hidden'>
      <CarouselPlugin/>
      <AboutUs/>
      <ChapterComp/>
      <ActivitiesComp/>
      <TestinomialComp/>
      <Partner/>
      </div> */}
    <Hero/>
    <Timelines/>
    <FlipWordss/>
    <FeaturesSection/>
    <AnimatedTestimonial/>
    <JoinTeam/>
    </div>
  )
}

export default page