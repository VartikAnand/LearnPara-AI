"use client";
import ChapterCard from "@/components/Cards/chapterCard/chapterCard";
import Hero from "@/components/Hero/hero";
import React from "react";
import { useState, useEffect } from "react";

const Page = () => {
  const subjects = ["Java", "Python", "C++", "IOT", "DTP"];
  const [currentSubject, setCurrentSubject] = useState(subjects[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = subjects.indexOf(currentSubject);
      const nextIndex = (currentIndex + 1) % subjects.length;
      setCurrentSubject(subjects[nextIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSubject]);

  return (
    <section className="h-full flex flex-col items-center justify-center">
      <div className="pt-32 pb-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold animate-tawil">Unlock the Power of Knowledge</h1>
      {/* <div className="flex justify-center align-middle md:justify-end gap-4 p-10 m-10"> */}
        <div className="loader flex align-middle justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <p>Try Topics Like</p>
          <div className="words">
            <span className="word">Java</span>
            <span className="word">Python</span>
            <span className="word">Java</span>
            <span className="word">C++</span>
            <span className="word">Dot Net</span>
           </div>
        {/* </div> */}
      </div>
      </div>

      <div className="flex justify-center w-full">
        <Hero />
      </div>
  

    </section>
  );
};

export default Page;
