"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { chapterscomp } from "../constant"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ChapterComp() {

  return (
    <div className="md:container mx-auto px-4 py-8 ">
    <h2 className="text-3xl font-bold mb-2 md:container">CHAPTERS</h2>
    <h3 className="text-xl font-semibold text-orange-500 mb-4 md:container">
      Connect, Learn, and Innovate with Our Chapters
    </h3>
    <p className="mb-8 text-gray-600 md:container">
    CodeIAM is a pre incubuation and hackathon club that focuses on empowering individuals in the realm of technology and coding. It offers a structured approach to mastering various aspects of software development and computer science. The platform’s primary goal is to help learners understand the fundamentals of programming, web development, and advanced technologies, providing chapters and resources that gradually build on these skills.
    </p>

    <div className="container mx-auto">
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-6xl   md:container"
      >
        <CarouselContent>
          {chapterscomp.map((chapter, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="max-h-lvh shadow-lg">
                  <CardHeader>
                    <Image src={"/logo.png"} height={50} width={50} alt="logo"/>
                    <Image
                      src={chapter.image}
                      width={300}
                      height={300}
                      alt={chapter.title}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <CardTitle>{chapter.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{chapter.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-blue-500 p-0 underline">Read More</Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-red-500" />
        <CarouselNext className="text-blue-500"/>
      </Carousel>

     
      
    </div>
  </div>
  )
}