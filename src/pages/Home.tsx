import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Portfolio from '../components/Projects/Portfolio';
import Contact from '../components/Contact/Contact';
import { staggerContainer } from '../utils/animations';

export default function Home() {
  const location = useLocation();
  const state = location.state as { scrollTo?: string };

  useEffect(() => {
    // Handle scroll to section after navigation
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear the state to prevent unwanted scrolling
      window.history.replaceState({}, document.title);
    }
  }, [state?.scrollTo]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="overflow-x-hidden"
    >
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </motion.div>
  );
}