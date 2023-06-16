import React from 'react';
import Thinking from '/public/UC2.png';
import Image from 'next/image';

const Coding: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src={Thinking} alt="Coding" width={400} height={400} />
      <div className="text-xl mt-4">Coding...</div>
      <div className='text-2xl mt-5'>Comming Soon</div>
    </div>
  );
};

export default Coding;
