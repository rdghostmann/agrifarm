"use client";
import React, { useState } from 'react';
import TopBar from './_components/TopBar';
import SideBar from './_components/SideBar';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <SideBar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <TopBar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
