'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"

interface SidebarItemProps {
  item: {
    title: string;
    icon?: string;
    path?: string;
    childrens?: {
      title: string;
      icon?: string;
      path?: string;
    }[];
  };
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className="sidebar-title cursor-pointer hover:bg-green-300 min-w-fit p-2 pr-6 hover:rounded-md"  onClick={() => setOpen(!open)} >
          <span className=''>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i onClick={() => setOpen(!open)}
            className="bi-chevron-down toggle-btn text-sm hover:text-green-600"
           
          ><AiOutlineArrowRight/></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link href={item.path || '#'} className="sidebar-item plain">
           {item.icon && <i className={item.icon}></i>}
        {item.title}
      </Link>
     
    );
  }
};

export default SidebarItem;
