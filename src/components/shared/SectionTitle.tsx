import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <motion.h2 
        variants={fadeIn('up')}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          variants={fadeIn('up', 0.2)}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}