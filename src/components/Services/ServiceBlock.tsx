import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

interface ServiceBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  index: number;
  onLearnMore: () => void;
}

export default function ServiceBlock({ icon: Icon, title, description, color, index, onLearnMore }: ServiceBlockProps) {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 transition-transform duration-500 group-hover:-translate-y-2">
        <motion.div
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1
          }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Icon className="w-12 h-12 text-gray-900 dark:text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>

        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={onLearnMore}
            className="text-gray-900 dark:text-white font-medium group-hover:text-pink-600 dark:group-hover:text-pink-500 transition-colors duration-300"
          >
            Learn More →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}