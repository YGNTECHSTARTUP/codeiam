import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function ActivitiesComp() {
  return (
    <div className="md:flex container min-w-full mx-auto gap-5 m-[5%]">
<Carousel className="w-fit hidden md:flex max-w-lg container">
      <CarouselContent className="bg-background/80 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="">
              <Card>
                <CardContent className=" w-full justify-center">
                 <Image src={"/hackathon.png"} height={600} width={600} alt="logo"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex"/>
      <CarouselNext className="hidden md:flex" />
    </Carousel>
    <div className="flex basis-[50%]">
<div className="lg:container">
<div className="text-2xl font-sans font-normal  tracking-widest text-neutral-700">Activites</div>
<div className="text-yellow-500 text-3xl font-semibold  font-sans">
    Fueling Innovation and <br/>Collabration
</div>
<br/>
<div className="text-sm font-semibold text-foreground ">

CodeIAM&apos;s activities include workshops, hackathons, mentorship programs, networking events, and project showcases, all designed to empower learners and foster collaboration in the tech community.
</div>
</div>
    </div>
    <Carousel className="w-fit md:hidden max-w-lg md:m-[5%] md:container">
      <CarouselContent className="bg-background/80 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="">
              <Card>
                <CardContent className=" w-full justify-center">
                 <Image src={"/hackathon.png"} height={600} width={600} alt="logo"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex"/>
      <CarouselNext className="hidden md:flex" />
    </Carousel>
    </div>
    
  )
}
