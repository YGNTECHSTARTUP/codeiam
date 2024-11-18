"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconFeather, IconHome, IconMessage, IconRss, IconUsers, IconUsersGroup } from "@tabler/icons-react";
// import { link } from "fs";
export function FloatingNave() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <IconFeather className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Chapters",
      link: "#chapters",
      icon: (
        <IconUsersGroup className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
        name:"Testinomials",
        link:"#testinomials",
        icon:(
            <IconRss className="h-4 w-4 text-neutral-500 dark:text-white" />
        )
    },
    {
        name:"Partners",
        link:"#partners",
        icon:(
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        )
    },
    {
        name:"Join Us",
        link:"#joinus",
        icon:(
            <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />
        )
    }
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
}

