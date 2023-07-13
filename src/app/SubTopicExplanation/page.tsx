'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookLoadingIndicator from "@/components/Loders/bookloding/loadingIndi";
import DetailExplanation from "./DetailExplanation/page";

interface SubTopicExplanationProps {
  selectedChapter: string | null;
  filtername: string;
}

const SubTopicExplanation: React.FC<SubTopicExplanationProps> = ({
  selectedChapter,
  filtername,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any | null>(null);
  const [definition, setDefinition] = useState<string>("");
  const [explanation, setExplanation] = useState<string[]>([]);
  const [importance, setImportance] = useState<string[]>([]);

  useEffect(() => {
    if (selectedChapter) {
      fetchData();
    }
  }, [selectedChapter]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const question = `
    Can you provide a detailed explanation of ${selectedChapter}? Please explain the concept of ${selectedChapter}, their importance, and how they are implemented. Write everything in Markdown format and number each point from the beginning to the end. When you start explaining it, put it in double square brackets for each keyword explanation, such as:

    1. Definition:
    [[Provide a clear and concise definition of the topic.]]

    2. Explanation:
    [[Explain the concept of the topic in detail and provide a college-level long answer.]]

    3. Importance:
    [[Explain the importance of the topic using sub-indexing (e.g., Point 1:, Point 2:, Point 3:, etc.).]]

    Please note that each section should be enclosed in double square brackets and follow the provided structure. Provide the data in the same format as the example.`;

    const options = {
      method: "POST",
      url: "https://chatgpt-4-bing-ai-chat.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
        "x-rapidapi-host": "chatgpt-4-bing-ai-chat.p.rapidapi.com",
      },
      data: {
        question,
        bing_u_cookie: "vartikanand",
      },
    };

    try {
      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const paragraph = responseData?.text_response || "";
    const definitionRegex = /1\. Definition: \[\[(.*?)\]\]/;
    const definitionMatch = paragraph.match(definitionRegex);

    if (definitionMatch) {
      const extractedDefinition = definitionMatch[1];
      setDefinition(extractedDefinition);
    }

    const explanationRegex = /2\. Explanation: \[\[(.*?)\]\]/g;
    const explanationMatches = paragraph.matchAll(explanationRegex);
    const extractedExplanation: string[] = [];

    for (const match of explanationMatches) {
      extractedExplanation.push(match[1]);
    }

    const importanceRegex = /\d+\.\s+Point\s+(\d+):\s+\[\[(.*?)\]\]/g;
    const importanceMatches = paragraph.matchAll(importanceRegex);
    const extractedImportancePoints: string[] = [];

    for (const match of importanceMatches) {
      const importancePoint = `Point ${match[1]}: ${match[2]}`;
      extractedImportancePoints.push(importancePoint);
    }

    setImportance(extractedImportancePoints);
    setExplanation(extractedExplanation);
  }, [responseData]);

  return (
    <div className="min-w-screen">
      <div className="relative text-xl gap-2 flex items-center justify-center align-middle p-4  border-b-2 lg:border-hidden">
        {selectedChapter ? (
          <div>
            {loading ? (
              <div className="flex items-center justify-center h-screen">
                <div className="gap-10">
                  <BookLoadingIndicator />
                  <div className="pt-20 mt-10">Loading...</div>
                </div>
              </div>
            ) : (
              <>
                <div className="text-2xl font-semibold ">{selectedChapter}</div>
                {definition && (
                  <div className="my-4">
                    <h1 className="font-bold">Definition:</h1>
                    <p>{definition}</p>
                  </div>
                )}
                {explanation.length > 0 && (
                  <div className="my-4">
                    <h5 className="font-bold">Explanation:</h5>
                    <ul className="list-disc pl-6">
                      {explanation.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <DetailExplanation Explanation={responseData?.text_response} />
              </>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Select Some Topics To Start
          </div>
        )}
      </div>
    </div>
  );
};

export default SubTopicExplanation;
