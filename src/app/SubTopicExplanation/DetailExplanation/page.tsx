'use client'
import React, { useState } from 'react';
import './DetailExplanationBtn.css';
import Example from '../SubTopicCompoenents/Example/page';
import QueAns from '../SubTopicCompoenents/QueAns/page';
import QuizTest from '../SubTopicCompoenents/QuizTest/page';
import Simplify from '../SubTopicCompoenents/Simplify/page';

interface DetailExplanationProps {
  Explanation: string;
}

const DetailExplanation: React.FC<DetailExplanationProps> = ({ Explanation }) => {
  const [currentPage, setCurrentPage] = useState('');
  const [data, setData] = useState('');

  const handleClick = (pageName: string) => {
    setCurrentPage(pageName);
    setData(Explanation);
  };

  const renderPage = () => {
    if (currentPage === 'Simplify') {
      return <Simplify Data={data} />;
    } else if (currentPage === 'Example') {
      return <Example Data={data} />;
    } else if (currentPage === 'Q/A') {
      return <QueAns Data={data} />;
    } else if (currentPage === 'Take Test') {
      return <QuizTest Data={data} />;
    }
    return null;
  };

  return (
    <section className='flex flex-col'>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-6 sm:grid-cols-2'>
        <div>
          <button className='button' onClick={() => handleClick('Simplify')}>
            Simplify
          </button>
        </div>
        <div>
          <button className='button' onClick={() => handleClick('Example')}>
            Example
          </button>
        </div>
        <div>
          <button className='button' onClick={() => handleClick('Q/A')}>
            Q/A
          </button>
        </div>
        <div>
          <button className='button' onClick={() => handleClick('Take Test')}>
            Quiz
          </button>
        </div>
      </div>

      <div className='mt-4'>{renderPage()}</div>
    </section>
  );
};

export default DetailExplanation;
