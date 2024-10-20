import * as React from "react"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from 'lucide-react';
import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar"
import { testimonials } from "../constant"

export function TestinomialComp() {
  return (

    <div className="md:flex  container min-w-full mx-auto gap-5 md:m-[5%]">
        <div className="flex basis-[50%]">
<div className="lg:container">
<div className="text-2xl font-sans font-normal  tracking-widest text-neutral-700">Testinomial&apos;s</div>
<div className="text-yellow-500 text-3xl font-semibold  font-sans">
    Hear from our <br/>Participation
</div>
<br/>
<div className="text-sm font-semibold text-foreground ">

CodeIAM&apos;s activities include workshops, hackathons, mentorship programs, networking events, and project showcases, all designed to empower learners and foster collaboration in the tech community.
</div>
</div>
    </div>
<Carousel className="w-fit hidden sm:flex max-w-lg md:container mx-auto text-center  justify-center ">
      <CarouselContent className="bg-background/80 ">
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="">
            <div className="">
             
                <Card key={item.Name} className=" sm:p-[5%]  max-w-sm md:m-[2%]">
                <CardContent className=" w-full sm:flex justify-center shrink-0 ">
                 <CardDescription className="max-w-xs content-center text-xs md:text-sm  md:border-r-2 font-bold border-primary md:flex">
                  {
                    item.TestimonialText
                  }
                </CardDescription >&nbsp;&nbsp;<Quote className="-mt-8" size={50} fill="black" />
                <div>
                <Avatar className=" border-r-2 border-primary">
                  <AvatarImage src={item.ImageUrl} />
                  <AvatarFallback>{item.FallbackText}</AvatarFallback>
                  
                 </Avatar>
                 <div className="text-xs mt-2 font-bold text-primary">{item.Name}</div>
                </div>
                 
                </CardContent>
              </Card>
              
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex"/>
    </Carousel>
    <div className="sm:hidden">
    <Carousel className="w-fit  max-w-xs md:container mx-auto text-center flex justify-center ">
      <CarouselContent className="bg-background/80 ">
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className=" ">
            <div className="">
             
                <Card key={item.Name} className=" flex  -ml-4 ">
               
                <CardContent className=" w-full sm:flex justify-center mt-10 shrink-0 ">
               <CardHeader>
               <Avatar className=" border-r-2 border-primary text-center mx-auto">
                  <AvatarImage src={item.ImageUrl} />
                  <AvatarFallback>{item.FallbackText}</AvatarFallback>
                  
                 </Avatar>
                 <div className="text-xs mt-2 font-bold text-primary">{item.Name}</div>
               </CardHeader>
                
                 
                 <CardDescription className="  content-center text-xs md:text-sm  md:border-r-2 font-bold border-primary md:flex">
                  {
                    item.TestimonialText
                  }
                </CardDescription >&nbsp;&nbsp;
                <div>
                
                
                </div>
                 
                </CardContent>
              </Card>
              
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex"/>
    </Carousel>
    
    </div>
    </div>
    
  )
}