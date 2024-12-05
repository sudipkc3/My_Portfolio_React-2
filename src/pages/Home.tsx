import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Portfolio from '../components/Projects/Portfolio';
import Contact from '../components/Contact/Contact';
import { staggerContainer } from '../utils/animations';

export default function Home() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </motion.div>
  );
}