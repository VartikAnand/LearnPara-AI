'use client'
import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex h-[100vh] md:hidden">
      <Sidebar />
      <div className="bg-green-300  flex-grow">
        show page
      </div>
    </div>
  );
};

export default Page;
