import Image from 'next/image'
import React from 'react'
import Working from '/public/UC4.png'

const UnderWorking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src={Working} alt="Coding" width={400} height={400} />
      <div className="text-xl mt-4">Under Construction ....</div>
    </div>
  )
}

export default UnderWorking