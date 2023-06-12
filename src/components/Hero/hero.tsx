'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import ChapterCard from "../Cards/chapterCard/chapterCard";
import NameLoader from "../Loders/nameLoder/nameLoder";
import BookLoadingIndicator from "../Loders/bookloding/loadingIndi";
import Tryagain from "../Loders/tryagain/tryagain";

interface Chapter {
  chapter: number;
  subtopics: string[];
  text_response: string;
}

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [responseData, setResponseData] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredChapters, setFilteredChapters] = useState<Chapter[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (responseData.length > 0) {
      const filteredChapters = responseData.filter(
        (chapterData) => chapterData.chapter > 0
      );
      setFilteredChapters(filteredChapters);
    }
  }, [responseData]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    // api call
    const options = {
      method: "POST",
      url: "https://chatgpt-4-bing-ai-chat.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key":process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        "X-RapidAPI-Host": "chatgpt-4-bing-ai-chat.p.rapidapi.com",
      },
      data: {
        question: generatePrompt(searchQuery),
        bing_u_cookie:'b'
          // "1uACDDkagIiz-j854cvfHNtcjIONbSPdRX12UIiQPYoS1CYoUqq0klfb6KukanAqllJg65-8tM5-C-c7Kl6gNrbH4yHuWwh2_GSrNxCop7c6N7DqWSMfH7u4innyhHO-w_tCwUD6NjZt8fxquLoJcErHfryj2dZ5BkMIGV5Lk4qpIKhXf8Of5NZfmlRHdhlx6236TquiN9-7nDBrG9qdEg",
      },
    };

    try {
      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    await fetchData();
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const hasSpecialCharacters = /[^A-Za-z0-9]/.test(inputValue);

    setSearchQuery(inputValue);

    if (hasSpecialCharacters) {
      setErrorMessage("No special characters are allowed.");
    } else {
      setErrorMessage("");
    }
  };

  function generatePrompt(subject: string) {
    const capitalizedSubject =
      subject[0].toUpperCase() + subject.slice(1).toLowerCase();

    const chapters = [...Array(10).keys()].map((num) => `Chapter ${num + 1}`);

    return `Please provide a list of chapter names to learn ${searchQuery} from basic to advanced. Each chapter ${capitalizedSubject} should be on a new line and in last chapter mentioned it as last chpater fetch data like example format only. For example:

Chapter 1: Introduction to Java
Chapter 2: Variables and Data Types in java
Chapter 3: Control Flow Statements in java
...
projects:

You can customize the chapter names based on your preference. Make sure to number each chapter sequentially and dont show write any link adn gretting and any other question just give me list of chpaters .`;
  }

  // CHAPTER FILTERS
  const textResponse = `${responseData.text_response}`;
  const pattern = /\d+\.\s([^0-9]+)/g;
  const chapters = textResponse.match(pattern);
  const chapters1 = textResponse.match(/Chapter \d+: .+?(?= Chapter \d+:|$)/g);

  const lastIndex = chapters?.length ? chapters.length - 2 : -2;

  let chapterData: string[] = [];
  if (chapters1 && chapters1.length > 0) {
    chapterData = chapters1;
  } else if (chapters && chapters.length > 0) {
    chapterData = chapters;
  }

  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center">
          <input
          
            placeholder="Search Here..."
            type="text"
            value={searchQuery}
            // onChange={handleInputChange}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-72 sm:w-72 md:w-96 h-10 sm:h-12 px-4 sm:px-6 rounded-lg border-2 border-gray-300 outline-none transition-all duration-300 ease-in-out shadow-md hover:border-gray-400 hover:shadow-lg focus:border-gray-500 text-black"
          />

          <button
            onClick={handleSearch}
            className="ml-4 px-4 sm:px-9 py-3 sm:py-3 text-xs sm:text-sm uppercase tracking-wide font-semibold text-black bg-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-green-500 hover:text-white transform hover:-translate-y-1 active:translate-y-0 hover:shadow-md hover:shadow-green-600"
          >
            Generate
          </button>
        </div>
      </div>

      <section className="items-center justify-center align-middle">
        {isLoading && <div className=" flex  flex-col justify-center align-middle items-center pt-10 m-10 gap-5">
          <NameLoader/> 
          <p>Generating best Modules For You on {searchQuery}</p>
          
          </div>}
        {error && <div className="flex justify-center align-middle items-center pt-10 m-10">
          <Tryagain/> : {error}</div>}
        {chapterData && (
          <ChapterCard chapterData={chapterData} />
        )}
      </section>
    </section>
  );
};

export default Hero;
