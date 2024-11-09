'use client'

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link"
import { chapters } from "../constant"
import Logo from "./Logo"

export const links = [ { key: 3, name: "BLOG", route: "/blog" },
  { key: 4, name: "ACTIVITIES", route: "/Activities" },
  { key: 5, name: "OUR TEAM", route: "/Team" },
  { key: 6, name: "CONTACT US", route: "/ContactMe" }]


export default function MobNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">

          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle><Logo/></SheetTitle>
         
        </SheetHeader>
        <nav className="mt-6">
        
          <Link
                  href={"/"}
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  <SheetClose>
                  Home
                  </SheetClose>
              
                </Link>
          
       
        <Accordion type="single" collapsible className="w-full border-0 border-background ">
            <AccordionItem value="chapters">
              <AccordionTrigger className="text-lg font-semibold">
                Chapters
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 space-y-2">
                  {chapters.map((chapter, index) => (
                    <Link href={chapter.href} key={index}>
                     <li key={index}>
                      <SheetClose>
                      <h3 className="text-sm font-medium">{chapter.label}</h3>
                      </SheetClose>
                      
                    
                    </li>
                    </Link>
                   
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        
         
          <ul className="space-y-2">
            {links.map((item, index) => (
              <li key={index}>
              
                <Link
                  href={item.route}
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  <SheetClose>
                  {item.name}
                  </SheetClose>
                
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}