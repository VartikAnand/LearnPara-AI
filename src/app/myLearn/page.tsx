'use client'
import Coding from '@/components/UnderCounstuction/Coding/Coding';
import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div>
       <Coding/>
    </div>
    // <div className="md:flex h-[100vh] hidden">
    //   <Sidebar />
    //   <div className="bg-green-300  flex-grow">
    //     show page
    //   </div>
    // </div>
  );
};

export default Page;
