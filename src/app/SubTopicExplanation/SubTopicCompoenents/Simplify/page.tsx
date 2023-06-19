'use client'
import Coding from '@/components/UnderCounstuction/Coding/Coding';
import React, { useState } from 'react';

interface SimplifyProps {
  Data: string;
}

const Simplify: React.FC<SimplifyProps> = ({ Data }) => {


  return (
    <div>
      <h2>Simplify</h2>
      <Coding/>
      {/* <p>{Data}</p> */}
    </div>
  );
};

export default Simplify;
