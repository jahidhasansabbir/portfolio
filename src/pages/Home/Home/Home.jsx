import React from 'react';
import Hero from '../../../components/sections/Hero/Hero';
import About from '../../../components/sections/About/About';
import Skills from '../../../components/sections/Skills/Skills';
import Education from '../../../components/sections/Education/Education';
import Contact from '../../../components/sections/Contact/Contact';
import Projects from '../../../components/sections/Projects/Projects';

const Home = () => {
  return (
    <div className="bg-[#0D1117] text-[#F3F4F6] my-10 sm:my-12 md:my-16 space-y-20 sm:space-y-24 md:space-y-32">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
