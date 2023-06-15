// 'use client'
// import { useEffect, useState } from 'react';

// const ParagraphFilter = () => {
//   const [importancePoints, setImportancePoints] = useState<string[]>([]);

//   useEffect(() => {
//     const paragraph = `3. Importance: 1. [[Interfaces provide a way to achieve abstraction in C#. They allow objects to interact with each other without knowing their implementation details[4][3].]] 2. [[Interfaces provide a way to achieve multiple inheritances in C#. A class can implement multiple interfaces[5][5].]] 3. [[Interfaces provide a way to achieve loose coupling between objects in C#. By using interfaces, we can change the implementation of a class without affecting the code that uses it[1][2].]]`;

//     const importanceRegex = /\d+\.\s+\[\[(.*?)\]\]/g;
//     const importanceMatches = paragraph.match(importanceRegex);

//     if (importanceMatches) {
//       const extractedImportancePoints: string[] = importanceMatches.map((match) =>
//         match.substring(match.indexOf('[[') + 2, match.indexOf(']]'))
//       );
//       setImportancePoints(extractedImportancePoints);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Importance Points:</h1>
//       <ul>
//         {importancePoints.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ParagraphFilter;


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page