'use client'
import React from 'react';

interface SubTopicExplanationProps {
  selectedChapter: string | null;
  filtername: string;
}

const SubTopicExplanation: React.FC<SubTopicExplanationProps> = ({ selectedChapter, filtername }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center align-middle p-4">
        <h5 className="text-xl">Explanation</h5>
      </div>

      {selectedChapter ? selectedChapter : 'No chapter selected'}

      <div>{filtername}</div>
    </div>
  );
};

export default SubTopicExplanation;
