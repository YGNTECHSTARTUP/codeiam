
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Caro() {
  const events = [
    {
      category: "HACKATHON",
      title: "GreenTech Innovation Hackathon",
      description:
        "Explore the excitement and innovation from our recent hackathons. CodeIAM's hackathons challenge participants to solve real-world problems through creativity, collaboration, and cutting-edge technology.",
      details: "Teams built innovative solar energy tracking apps and IoT-based energy management systems, working to reduce energy wastage by optimizing smart grid performance.",
    },
    {
      category: "SEMINARS & WEBINARS",
      title: "Future of Data Science in Finance",
      description:
        "Our Seminars & Webinars at CodeIAM provide a platform to gain knowledge from leading experts. These events are designed to keep you up-to-date with the latest technological advancements and industry trends.",
      details: "Speaker: John Doe, Lead Data Scientist at FinTech Solutions\n• Predictive analytics in financial markets\n• Fraud detection using AI and machine learning\n• Real-time data processing",
    },
    {
      category: "IDEATHONS",
      title: "Optimizing Urban Traffic Flow",
      description:
        "At CodeIAM, ideathons are designed to challenge your creativity and problem-solving skills. These collaborative, idea-generation events bring together innovators and experts to brainstorm solutions to real-world problems.",
      details: "Team Name: Traffic Titans\nSolution: Developed an AI-based predictive system using real-time traffic data and machine learning to optimize signal timings and reroute vehicles dynamically.",
    },
  ]

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {events.map((event, index) => (
          <CarouselItem key={index}>
            <Card className="border-0 shadow-none">
              <CardContent className="grid md:grid-cols-2 gap-6 p-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/hacka1.jpeg"
                    alt="Event image"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary">
                      {event.category}
                    </h3>
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                  <div className="prose prose-sm">
                    <p className="whitespace-pre-line">{event.details}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </div>
    </Carousel>
  )
}