"use client";

import Hero from "@/components/Hero/hero";
import React, { useState, useEffect } from "react";

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
  }, [currentSubject, subjects]); // Include subjects in the dependency array

  return (
    <section className="flex flex-col items-center align-middle justify-center">
      <div className="pt-24 pb-24 p-4 md:pt-20 md:pb-20 lg:pt-28 lg:pb-20 xl:pt-36 xl:pb-28">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tawlnd cs">
              Unlock the Power of Knowledge
            </h1>
          </div>
        </div>{" "}
        <div className="loader flex align-middle justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <p>Try Topics Like</p>
          <div className="words">
            <span className="word">Java</span>
            <span className="word">Python</span>
            <span className="word">Java</span>
            <span className="word">C++</span>
            <span className="word">Dot Net</span>
          </div>
        </div>
      </div>
      <div className=" pb-24  md:pb-20  lg:pb-28 xl:pb-28">

      <div className="flex justify-center w-full">
        <Hero />
      </div>
      </div>
    </section>
  );
};

export default Page;
