import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string[];
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          scale: 1.1
        }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-12 h-12 text-pink-600 dark:text-pink-500 mb-6" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      
      <ul className="space-y-3 mb-6">
        {description.map((item, index) => (
          <motion.li 
            key={index}
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
      
      <motion.button 
        className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Learn more
      </motion.button>
    </motion.div>
  );
}