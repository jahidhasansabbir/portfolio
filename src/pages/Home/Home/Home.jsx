import React from 'react';
import Hero from '../../../components/sections/Hero/Hero';
import About from '../../../components/sections/About/About';

const Home = () => {
  return (
    <div className="bg-[#0D1117] text-[#F3F4F6]">
      <Hero />
      <About></About>
    </div>
  );
};

export default Home;
