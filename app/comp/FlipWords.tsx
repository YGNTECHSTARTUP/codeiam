import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordss() {
  const words = ["Conduct Hackathons", "Conduct Coding Challenges", "Provide Project Development Space", "Provide Industry Engagement"];

  return (
    <div className="container">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        At Codeiam We 
        <FlipWords words={words} /> <br />
        
      </div>
    </div>
  );
}
