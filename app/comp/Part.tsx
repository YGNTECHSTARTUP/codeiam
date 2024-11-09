"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
// import { partners } from "../constant"
import Image from "next/image"
import Link from "next/link"

export function OurPartners() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000 })
  )
  return (
    <div className="flex container">
      <h3 className="text-lg font-semibold">Our Trusted Partners on the Journey</h3>
        <Carousel 
    plugins={[plugin.current]}
   
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-[100%] p-[10%]  -mt-[6%] mx-auto flex justify-center overflow-hidden"
    >
      <CarouselContent className="">
        {["/moe.png","/moe.png","/moe.png","/moe.png","/moe.png"].map((i) =>  (
          <CarouselItem key={i} className="basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/5">
            <div className="p-1">
              <Card>
                <Link href={i}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                 <Image src={i} alt={i} width={400} height={400} />
                </CardContent>
                </Link>
             
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>
    </div>
    
    
  )
}