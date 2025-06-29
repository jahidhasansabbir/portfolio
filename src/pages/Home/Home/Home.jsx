import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Hero from '../../../components/sections/Hero/Hero';
import About from '../../../components/sections/About/About';
import Skills from '../../../components/sections/Skills/Skills';
import Education from '../../../components/sections/Education/Education';
import Contact from '../../../components/sections/Contact/Contact';
import Projects from '../../../components/sections/Projects/Projects';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,   // allow animation every scroll
      mirror: false,
    });
  }, []);

  return (
    <div className="bg-[#0D1117] text-[#F3F4F6] my-10 sm:my-12 md:my-16 space-y-20 sm:space-y-24 md:space-y-32">
      <section id="hero" data-aos="fade-in"><Hero /></section>
      <section id="about" data-aos="fade-in"><About /></section>
      <section id="skills" data-aos="fade-in"><Skills /></section>
      <section id="education" data-aos="fade-in"><Education /></section>
      <section id="projects" data-aos="fade-in"><Projects /></section>
      <section id="contact" data-aos="fade-in"><Contact /></section>
    </div>
  );
};

export default Home;
