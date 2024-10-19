"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  

 
} from "@/components/ui/carousel"
import { CarouselItems } from "../constant"
import Image from "next/image"
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mt-20 "
      
    >
      <CarouselContent className="min-h-60">
        {CarouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className=" -mt-[28%] lg:-mt-[40%] h-fit w-fit">
            <div className="flex aspect-square items-center justify-center ">
              
                <Image src={item.carouselimg} alt={`carousel${item.id}`} width={2000} height={1} />
              
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
       
    </Carousel>
  )
}
