import React from 'react';
import sidebarData from './data/SidebarData.json';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar border-r-2 h-full">
      {sidebarData.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
