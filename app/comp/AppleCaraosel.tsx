"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Chapterpagese from "./Chapterpage";
 
export function Chap () {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
 
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Our Chapter
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "/aimla.jpeg",
      content: (
        <Chapterpagese
          title="AI/ML Chapter"
          description="Exploring the frontiers of Artificial Intelligence and Machine Learning"
          images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
          teamMembers={[
            { name: "John Doe", role: "President", image: "/placeholder-user.jpg" },
            { name: "Jane Smith", role: "Vice President", image: "/placeholder-user.jpg" },
            { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
          ]}
          whatsappLink="https://whatsapp.com/group/example"
          previousEvents={[
            {
              title: "AI Ethics Workshop",
              date: "2023-05-15",
              description: "A workshop discussing the ethical implications of AI in society.",
            },
            {
              title: "Machine Learning Hackathon",
              date: "2023-07-22",
              description: "A 24-hour hackathon focused on solving real-world problems using ML.",
            },
          ]}
        />
      ),
    },
    {
      category: "AR & VR WEB APP",
      title: "You can create immersive AR/VR experiences.",
      src: "/arvr.png",
      content: (
        <Chapterpagese
          title="AR/VR Chapter"
          description="Creating immersive experiences with Augmented and Virtual Reality"
          images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
          teamMembers={[
            { name: "John Doe", role: "President", image: "/placeholder-user.jpg" },
            { name: "Jane Smith", role: "Vice President", image: "/placeholder-user.jpg" },
            { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
          ]}
          whatsappLink="https://whatsapp.com/group/example"
          previousEvents={[
            {
              title: "AR Hackathon",
              date: "2023-06-12",
              description: "A competition to create AR applications.",
            },
            {
              title: "VR Development Workshop",
              date: "2023-08-08",
              description: "An interactive workshop on VR tools and techniques.",
            },
          ]}
        />
      ),
    },
    {
        category: "ETHICAL DEVSECOPS",
        title: "You can enhance your DevOps workflows with security.",
        src: "/devsec.png",
        content: (
          <Chapterpagese
            title="DevSecOps Chapter"
            description="Integrating security practices into DevOps workflows"
            images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
            teamMembers={[
              { name: "John Doe", role: "President", image: "/placeholder-user.jpg" },
              { name: "Jane Smith", role: "Vice President", image: "/placeholder-user.jpg" },
              { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
            ]}
            whatsappLink="https://whatsapp.com/group/example"
            previousEvents={[
              {
                title: "Secure Coding Workshop",
                date: "2023-03-18",
                description: "An introduction to secure software development practices.",
              },
              {
                title: "Vulnerability Testing Webinar",
                date: "2023-04-25",
                description: "Best practices in vulnerability testing and management.",
              },
            ]}
          />
        ),
      },
      {
        category: "Gate Ignite",
        title: "Join us to master your GATE preparation.",
        src: "/aiml.png",
        content: (
          <Chapterpagese
            title="Gate Ignite Chapter"
            description="Preparing students for competitive exams like GATE"
            images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
            teamMembers={[
              { name: "John Doe", role: "President", image: "/placeholder-user.jpg" },
              { name: "Jane Smith", role: "Vice President", image: "/placeholder-user.jpg" },
              { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
            ]}
            whatsappLink="https://whatsapp.com/group/example"
            previousEvents={[
              {
                title: "GATE Prep Bootcamp",
                date: "2023-09-01",
                description: "Comprehensive GATE preparation sessions.",
              },
              {
                title: "Mock Test Marathon",
                date: "2023-10-05",
                description: "A series of mock tests for GATE aspirants.",
              },
            ]}
          />
        ),
      },
      {
        category: "Industry 4.0",
        title: "Shape the Future with Industry 4.0.",
        src: "/ind.png",
        content: (
          <Chapterpagese
            title="Industry 4.0 Chapter"
            description="Exploring automation, IoT, and smart manufacturing technologies to drive industrial efficiencies."
            images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
            teamMembers={[
              { name: "John Doe", role: "President", image: "/placeholder-user.jpg" },
              { name: "Jane Smith", role: "Vice President", image: "/placeholder-user.jpg" },
              { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
            ]}
            whatsappLink="https://whatsapp.com/group/example"
            previousEvents={[
              {
                title: "Smart Manufacturing Workshop",
                date: "2023-02-15",
                description: "Hands-on training in IoT-based manufacturing solutions.",
              },
              {
                title: "Automation Hackathon",
                date: "2023-05-20",
                description: "Building innovative solutions for automated industries.",
              },
            ]}
          />
        ),
      },
      {
        category: "Women Techies",
        title: "Empower Women in Technology.",
        src: "/wom.png",
        content: (
          <Chapterpagese
            title="Women Techies Chapter"
            description="Promoting gender diversity and empowering women in STEM fields."
            images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
            teamMembers={[
              { name: "Emily Brown", role: "President", image: "/placeholder-user.jpg" },
              { name: "Sophia Lee", role: "Vice President", image: "/placeholder-user.jpg" },
              { name: "Isabella Taylor", role: "Secretary", image: "/placeholder-user.jpg" },
            ]}
            whatsappLink="https://whatsapp.com/group/example"
            previousEvents={[
              {
                title: "Women in Tech Conference",
                date: "2023-06-30",
                description: "A networking event featuring women leaders in tech.",
              },
              {
                title: "STEM Mentorship Program",
                date: "2023-09-10",
                description: "Connecting women in STEM with industry mentors.",
              },
            ]}
          />
        ),
      },
      {
        category: "Marketing and Event Management",
        title: "Master Branding and Event Organization.",
        src: "/aiml.png",
        content: (
          <Chapterpagese
            title="Marketing and Event Management Chapter"
            description="Developing skills in branding, communication, and event organization."
            images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
            teamMembers={[
              { name: "Oliver James", role: "President", image: "/placeholder-user.jpg" },
              { name: "Liam Davis", role: "Vice President", image: "/placeholder-user.jpg" },
              { name: "Emma Wilson", role: "Secretary", image: "/placeholder-user.jpg" },
            ]}
            whatsappLink="https://whatsapp.com/group/example"
            previousEvents={[
              {
                title: "Digital Marketing Bootcamp",
                date: "2023-04-12",
                description: "Learning the latest trends in digital and social media marketing.",
              },
              {
                title: "Event Management Masterclass",
                date: "2023-07-18",
                description: "Insights into organizing impactful events.",
              },
            ]}
          />
        ),
      },
      {
        category: "Competitive Programming and DSA",
        title: "Solve Problems Efficiently.",
        src: "/devsec.png",
        content: (
          <Chapterpagese
            title="Competitive Programming and DSA Chapter"
            description="Prepare for coding competitions and technical interviews."
            images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
            teamMembers={[
              { name: "Noah Miller", role: "President", image: "/placeholder-user.jpg" },
              { name: "Lucas Garcia", role: "Vice President", image: "/placeholder-user.jpg" },
              { name: "Mia Martinez", role: "Secretary", image: "/placeholder-user.jpg" },
            ]}
            whatsappLink="https://whatsapp.com/group/example"
            previousEvents={[
              {
                title: "DSA Workshop",
                date: "2023-03-05",
                description: "In-depth sessions on data structures and algorithms.",
              },
              {
                title: "Coding Competition Week",
                date: "2023-08-22",
                description: "A series of competitive programming challenges.",
              },
            ]}
          />
        ),
      },
      {
        category: "International AU Techies",
        title: "Collaborate Globally in Tech.",
        src: "/arvr.png",
        content: (
          <Chapterpagese
            title="International AU Techies Chapter"
            description="Fostering global collaboration through international tech initiatives."
            images={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
            teamMembers={[
              { name: "Ethan Clark", role: "President", image: "/placeholder-user.jpg" },
              { name: "Charlotte White", role: "Vice President", image: "/placeholder-user.jpg" },
              { name: "Amelia Harris", role: "Secretary", image: "/placeholder-user.jpg" },
            ]}
            whatsappLink="https://whatsapp.com/group/example"
            previousEvents={[
              {
                title: "Global Hackathon",
                date: "2023-11-10",
                description: "Collaborating with international teams on tech projects.",
              },
              {
                title: "Tech Talks with Global Leaders",
                date: "2023-12-05",
                description: "Insights into international trends in technology.",
              },
            ]}
          />
        ),
      },
      
    // Add other chapters similarly...
  ];
  