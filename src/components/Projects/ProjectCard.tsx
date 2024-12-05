import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cardHover } from '../../utils/animations';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

export default function ProjectCard({ image, title, description, link, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-[400px]"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      custom={index}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
        layoutId={`project-image-${index}`}
      />
      <motion.div 
        className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div>
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-200 text-sm leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 w-fit mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

