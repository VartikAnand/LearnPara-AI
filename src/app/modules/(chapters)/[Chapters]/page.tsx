"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import ChapterListCard from "@/components/Cards/ChapterListCard/ChapterListCard";
import ShareBtn from "@/components/ReusableComponents/ShareBtn/ShareBtn";
import NameLoader from "@/components/Loders/nameLoder/nameLoder";
import Tryagain from "@/components/Loders/tryagain/tryagain";
import SubTopicExplanation from "@/app/SubTopicExplanation/page";

interface Chapter {
  chapter: number;
  subtopics: string[];
  error: string;
  text_response?: string;
}

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const chapter = decodeURIComponent(searchParams.toString());
 

  const [responseData, setResponseData] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredChapters, setFilteredChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null); // Update the type to string
  const scrollRef = useRef<HTMLDivElement>(null);

  const filterSentence = (sentence: string): string => {
    const filteredText = sentence
      .toString()
      .replace(/[+=.]|chapters|\d+/gi, " ")
      .replace(/#/g, "# ")
      .replace(/!/g, "! ")
      .trim();
    return filteredText;
  };

  const filteredChapter = filterSentence(chapter || "");

  useEffect(() => {
    if (responseData.length > 0) {
      const filteredChapters = responseData.filter(
        (chapterData) => chapterData.chapter > 0
      );
      setFilteredChapters(filteredChapters);
    }
  }, [responseData]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const options = {
      method: "POST",
      url: "https://chatgpt-4-bing-ai-chat.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        "X-RapidAPI-Host": "chatgpt-4-bing-ai-chat.p.rapidapi.com",
      },
      data: {
        question: generatePrompt(`${chapter}`),
        bing_u_cookie: "vartik",
      },
    };

    try {
      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, [chapter]);

  useEffect(() => {
    if (chapter) {
      fetchData();
    }
  }, [chapter, fetchData]); // Include fetchData in the dependency array

  const generatePrompt = (subTopic: string) => {
    const capitalizedSubject =
      subTopic[0].toUpperCase() + subTopic.slice(1).toLowerCase();

    const chapters = Array.from({ length: 10 }, (_, i) => i + 1).join("\n  ");

    return `Please suggest the 8 to 10 subtopic names for the ${capitalizedSubject} in ${chapter} chapters and add 9 subtopic as intro and mention subject name for each subtopic . Your suggestions should cover all the essential information related to the chapter. For example:
    Subtopic1: History of Java
    Subtopic2: Java Development Environment in java
    Subtopic3: Basic Syntax and Structure in java
    Subtopic4: 2. The if statement in java

    ...
    You can customize the subtopic name based on the given chapter names according to your preference. Make sure to number each subtopic and the subject name for each sequentially and don't include any links, greetings, or other questions. Just give me a list of subtopics based on the chapter name.`;
  };

  const handleChapterClick = (chapterName: string) => {
    setSelectedChapter(chapterName);
    scrollToExplanation();
  };

  const scrollToExplanation = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Data = responseData.text_response;
  const pattern = /\d+\.\s([^0-9]+)/g;
  const chapters = Data ? Data.match(pattern) : null;
  const chapters1 = Data
    ? Data.match(/Subtopic \d+: .+?(?= Subtopic \d+:|$)/g)
    : null;

  const lastIndex = chapters ? chapters.length - 2 : -1;
  let chapterData: string[] = [];

  if (chapters1 && chapters1.length > 0) {
    chapterData = chapters1;
  } else if (chapters && chapters.length > 0) {
    chapterData = chapters;
  }

  const isLoadingOrError = isLoading || error;

  return (
    <div className="h-[100vh]" >
      <section className="flex px-2 justify-between pt-3">
        {/* Chapter Header */}
        <div>
          <h1 className="text-2xl lg:pl-8 pt-2 font-medium">
            {filteredChapter}
          </h1>
        </div>
        <div className="lg:pr-5">
          <ShareBtn />
        </div>
      </section>
      <div className="border-b-2  bg-white mt-4"></div>
      <section className="flex flex-col lg:flex-row md:flex-row md:flex-wrap gap-2 p-2 pt-2">
        <div className="first-div  lg:w-1/4 sm:w-full">
          {isLoadingOrError ? (
            <div className="flex flex-col justify-center align-middle items-center pt-10 m-10 gap-5">
              {isLoading ? <NameLoader /> : <Tryagain />}
              <p>{isLoading ? `Generating Best Topic` : error}</p>
            </div>
          ) : (
            <div>
              <div className="relative flex items-center justify-center align-middle p-4">
                <h5 className="text-xl font-semibold">Sub Topic's</h5>
              </div>
              {chapters &&
                chapters
                  .slice(0, lastIndex + 1)
                  .map((chapter, index) => (
                    <ChapterListCard
                      key={index}
                      chapterName={chapter}
                      onClick={handleChapterClick}
                    />
                  ))}
            </div>
          )}
        </div>
        <div
          className="h-[100vh] lg:w-2/3 sm:w-full max-xl:2/3 lg:border-l-2 p-2 flex-shrink-0"
          ref={scrollRef}
        >
          {/* Render the explanation for the selected chapter here */}
          <SubTopicExplanation
            selectedChapter={selectedChapter}
            filtername={chapter.toString()}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
