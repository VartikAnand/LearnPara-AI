// 'use client'
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Hero = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [responseData, setResponseData] = useState(null);
//   const [topic, setTopic] = useState("");
//   const [definition, setDefinition] = useState("");
//   const [explanation, setExplanation] = useState([]);

//   useEffect(() => {
//     const paragraph = responseData?.text_response || "";
//     const definitionRegex = /1\. Definition: \[\[(.*?)\]\]/;
//     const definitionMatch = paragraph.match(definitionRegex);

//     if (definitionMatch) {
//       const extractedDefinition = definitionMatch[1];
//       setDefinition(extractedDefinition);
//     }

//     const explanationRegex = /2\. Explanation: \[\[(.*?)\]\]/g;
//     const explanationMatch = paragraph.matchAll(explanationRegex);

//     const extractedExplanation = [];
//     for (const match of explanationMatch) {
//       extractedExplanation.push(match[1]);
//     }

//     setExplanation(extractedExplanation);
//   }, [responseData]);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     const question = `
//     Can you provide a detailed explanation of ${topic}? Please explain the concept of ${topic}, their importance, and how they are implemented. Write everything in Markdown format and number each point from the beginning to the end. When you start explaining it, put it in double square brackets for each keyword explanation, such as:
    
//     1. Definition:
//     [[Provide a clear and concise definition of the topic.]]
    
//     2. Explanation:
//     [[Explain the concept of the topic in detail and provide a college-level long answer.]]
    
//     3. Importance:
//     [[Explain the importance of the topic using sub-indexing (e.g., Point 1:, Point 2:, Point 3:, etc.).]]
    
//     Please note that each section should be enclosed in double square brackets and follow the provided structure. Provide the data in the same format as the example.`;

//     const options = {
//       method: "POST",
//       url: "https://chatgpt-4-bing-ai-chat.p.rapidapi.com/ask",
//       headers: {
//         "content-type": "application/json",
//         "x-rapidapi-key": process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//         "x-rapidapi-host": "chatgpt-4-bing-ai-chat.p.rapidapi.com",
//       },
//       data: {
//         question,
//         bing_u_cookie: "b",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       setResponseData(response.data);
//     } catch (error) {
//       setError("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//           <div className="mt-8 space-y-6">
//             <div>
//               <input
//                 type="text"
//                 value={topic}
//                 onChange={(e) => setTopic(e.target.value)}
//                 placeholder="Enter topic"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               />
//             </div>
//           </div>
//           <button
//             onClick={fetchData}
//             disabled={loading}
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <span>Search</span>
//           </button>
//         </div>
//       </div>
//       {loading && <div className="text-center">Loading...</div>}
//       {error && <div className="text-center text-red-500">{error}</div>}
//       {responseData && (
//         <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//           <div>
//             <h1>Definition:</h1>
//             <p>{definition}</p>
//           </div>
//           <div>
//             <h1>Explanation:</h1>
//             <ul>
//               {explanation.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page