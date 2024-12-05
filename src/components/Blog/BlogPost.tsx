import { motion } from 'framer-motion';
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import BlogContent from './BlogContent';
import { fadeIn } from '../../utils/animations';

interface BlogPostProps {
  frontmatter: {
    title: string;
    date: string;
    author: string;
    readTime: string;
    category: string;
    excerpt: string;
    coverImage: string;
  };
  content: string;
}

export default function BlogPost({ frontmatter, content }: BlogPostProps) {
  return (
    <motion.div 
      className="max-w-4xl mx-auto px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div variants={fadeIn('up')}>
        <span className="inline-block px-3 py-1 bg-pink-600 text-white rounded-full text-sm mb-4">
          {frontmatter.category}
        </span>
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        variants={fadeIn('up')}
      >
        {frontmatter.title}
      </motion.h1>

      <motion.div 
        className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-8"
        variants={fadeIn('up')}
      >
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {frontmatter.date}
        </span>
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {frontmatter.readTime}
        </span>
      </motion.div>

      <motion.div 
        className="relative h-96 mb-12 rounded-xl overflow-hidden"
        variants={fadeIn('up')}
      >
        <img
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>

      <BlogContent content={content} />
    </motion.div>
  );
}