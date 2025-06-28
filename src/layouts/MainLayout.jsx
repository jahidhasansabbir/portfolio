import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="bg-[#0D1117] max-w-[1440px] mx-auto text-[#F3F4F6]">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
