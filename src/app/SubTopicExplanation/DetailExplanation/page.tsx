'use client'

import React, { useState } from 'react';
import './DetailExplanationBtn.css';

interface DetailExplanationProps {
  Explanation: string;
}

const DetailExplanation: React.FC<DetailExplanationProps> = ({ Explanation }) => {
  const [currentPage, setCurrentPage] = useState('');

  const handleClick = (pageName: string) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    if (currentPage === 'Simplify') {
      return <div>Simplify Page</div>;
    } else if (currentPage === 'Example') {
      return <div>Example Page</div>;
    } else if (currentPage === 'Q/A') {
      return <div>Q/A Page</div>;
    } else if (currentPage === 'Take Test') {
      return <div>Take Test Page</div>;
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
            Take Test
          </button>
        </div>
      </div>

      <div className='mt-4'>{renderPage()}</div>
    </section>
  );
};

export default DetailExplanation;
