"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Chapter {
  chapter: number;
  subtopics: string[];
}

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [responseData, setResponseData] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredChapters, setFilteredChapters] = useState<Chapter[]>([]);

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

    const options = {
      method: 'POST',
      url: 'https://chatgpt-4-bing-ai-chat.p.rapidapi.com/ask',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'fc1e7fa68emshcdc527ade8b9c70p16f942jsne8387a7bbb32',
        'X-RapidAPI-Host': 'chatgpt-4-bing-ai-chat.p.rapidapi.com',
      },
      data: {
        question: generatePrompt(searchQuery),
        bing_u_cookie:
          '1uACDkagIiBz-j854cvfHNtcjIONbSPdRX12UIiQPYoS1CYoUqq0klfb6KukanAqllJg65-8tM5-C-c7Kl6gNrbH4yHuWwh2_GSrNxCop7c6N7DqWSMfH7u4innyhHO-w_tCwUD6NjZt8fxquLoJcErHfryj2dZ5BkMIGV5Lk4qpIKhXf8Of5NZfmlRHdhlx6236TquiN9-7nDBrG9qdEg',
      },
    };

    try {
      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    await fetchData();
  };

  const generatePrompt = (subTopic: string) => {
    const capitalizedSubject =
      subTopic[0].toUpperCase() + subTopic.slice(1).toLowerCase();
  
    const chapters = [...Array().keys()].map((num) => `${num + 1}`);
  
    return `Please suggest the 8 to 10 subtopic  names  for the ${capitalizedSubject} in ${chapters.length} chapters  and add 9 subtopic as intro  . Your suggestions should cover all the essential information related to the chapter ${chapters.join("\n  ")} for example 
    Subtopic1:
    Subtopic2:
    Subtopic3:
    You can customize the subtopic name base on the given chpater names based on your preference. Make sure to number each subtopic sequentially and dont show write any link adn gretting and any other question just give me list of subtopic base on the chapter name .`;
  };

  // CHAPTER FILTERS
  const textResponse = `${responseData.text_response}`;
  const pattern = /\d+\.\s([^0-9]+)/g;
  const chapters = textResponse.match(pattern);
  const chapters1 = textResponse.match(/Subtopic \d+: .+?(?= Subtopic \d+:|$)/g);

  const lastIndex = chapters?.length ? chapters.length - 2 : -1;

  let chapterData: string[] = [];
  if (chapters1 && chapters1.length > 0) {
    chapterData = chapters1;
  } else if (chapters && chapters.length > 0) {
    chapterData = chapters;
  }

  return (
    <div>
      <div>
        <input
        className='text-black'
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div>{`${JSON.stringify(responseData.text_response)}`}</div>

      <div>
        <h1>Selected Data:</h1>
        {chapters && (
          <ul>
            {chapters.slice(0, lastIndex + 1).map((chapter, index) => (
              <li key={index}>{chapter}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
