import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/animations';
import AnimatedText from '../components/shared/AnimatedText';
import WorkCard from '../components/Works/WorkCard';
import { works } from '../data/works';

export default function Works() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <motion.div 
        className="container mx-auto px-6 py-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn('up')}
        >
          <AnimatedText 
            text="My Creative Portfolio"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <WorkCard key={work.id} {...work} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}