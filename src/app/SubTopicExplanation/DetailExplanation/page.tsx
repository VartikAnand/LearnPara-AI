import DetailExplanationBtn from '@/components/ReusableComponents/DetailExplanationBtn/DetailExplanationBtn';
import React from 'react';

interface DetailExplanationProps {
  Explantion: string;
}

const DetailExplanation: React.FC<DetailExplanationProps> = ({ Explantion }) => {
  return (
    <section className=''>
      <div className='grid  md:grid-cols-2 grid-cols-1 justify-start'>
        <div className='flex gap-4 mb-3'>
          <DetailExplanationBtn BtnName={'Q/A'} Click={'/'} />
          <DetailExplanationBtn BtnName={'Simplify'} Click={'/'} />
        </div>
        <div className='flex gap-2'>
          <DetailExplanationBtn BtnName={'Example'} Click={'/'} />
          <DetailExplanationBtn BtnName={'Take Test'} Click={'/'} />
        </div>
      </div>
    </section>
  );
};

export default DetailExplanation;
