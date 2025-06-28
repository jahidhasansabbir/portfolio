import React from 'react';
import Hero from '../../../components/sections/Hero/Hero';
import About from '../../../components/sections/About/About';
import Skills from '../../../components/sections/Skills/Skills';
import Education from '../../../components/sections/Education/Education';
import Contact from '../../../components/sections/Contact/Contact';

const Home = () => {
  return (
    <div className="bg-[#0D1117] text-[#F3F4F6]">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
