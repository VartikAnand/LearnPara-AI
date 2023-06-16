'use client'
import React, { useState } from 'react';

interface SimplifyProps {
  Data: string;
}

const Simplify: React.FC<SimplifyProps> = ({ Data }) => {


  return (
    <div>
      <h2>Simplify</h2>
      <p>{Data}</p>
    </div>
  );
};

export default Simplify;
