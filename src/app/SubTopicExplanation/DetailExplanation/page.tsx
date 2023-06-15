import React from 'react';
import DetailExplanationBtn from '@/components/ReusableComponents/DetailExplanationBtn/DetailExplanationBtn';

interface DetailExplanationProps {
  Explanation: string;
}

const DetailExplanation: React.FC<DetailExplanationProps> = ({ Explanation }) => {
  const handleClick = () => {
    // Handle the button click here
  };

  return (
    <section className=''>
      <div className='grid  md:grid-cols-2 grid-cols-1 justify-start'>
        {/* <div className='flex gap-4 mb-3'>
          <DetailExplanationBtn BtnName={'Q/A'} Click={handleClick} />
          <DetailExplanationBtn BtnName={'Simplify'} Click={handleClick} />
        </div>
        <div className='flex gap-2'>
          <DetailExplanationBtn BtnName={'Example'} Click={handleClick} />
          <DetailExplanationBtn BtnName={'Take Test'} Click={handleClick} />
        </div> */}
      </div>
    </section>
  );
};

export default DetailExplanation;
