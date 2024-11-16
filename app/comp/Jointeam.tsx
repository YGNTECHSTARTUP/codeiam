"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function JoinTeam() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join Our Community
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        The Codeiam Pre-Incubation Hackathon Cluster is a dynamic innovation hub designed to empower aspiring developers, entrepreneurs, and tech enthusiasts. This initiative bridges the gap between raw ideas and transformative solutions, offering participants a unique opportunity to develop, prototype, and showcase groundbreaking projects.
        </p>
        <input
          type="text"
          
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
