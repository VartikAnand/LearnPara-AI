import React from 'react'
import Thinking from '/public/UC3.png';
import Image from 'next/image';

const ComminSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <Image src={Thinking} alt="Coding" width={200} height={200} />
    <div className="text-xl mt-4">Coding</div>
  </div>
  )
}

export default ComminSoon