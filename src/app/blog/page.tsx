'use client'
import { useRouter } from 'next/router';
import React from 'react';

const ChapterList = () => {


  const responseData = ''

  const sentence = responseData;
    const textResponse = sentence;
  const pattern = /\d+\.\s([^0-9]+)/g;
  const chapters = textResponse.match(pattern);
  const chapters1 = textResponse.match(/Chapter \d+: .+?(?= Chapter \d+:|$)/g);

  const lastIndex = chapters?.length ? chapters.length - 2 : -1;

  let chapterData = [];
  if (chapters1 && chapters1.length > 0) {
    chapterData = chapters1;
  } else if (chapters && chapters.length > 0) {
    chapterData = chapters;
  }

  return (
    <div>
      <h1>Chapter List</h1>
      {chapterData.length > 0 ? (
        <ul>
          {chapterData.map((chapter, index) => (
            <li key={index}>{chapter}</li>
          ))}
        </ul>
      ) : (
        <p>No chapters found.</p>
      )}
    </div>
  );
};

export default ChapterList;
