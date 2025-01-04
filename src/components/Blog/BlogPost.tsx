import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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
  content: JSX.Element;
}

export default function BlogPost({ frontmatter, content }: BlogPostProps) {
  const navigate = useNavigate();

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
      {/* Go Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 mb-8 group"
        variants={fadeIn('up')}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Go Back
      </motion.button>

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

      {content}

      {/* More Posts Button */}
      <motion.div 
        className="mt-12 text-center"
        variants={fadeIn('up')}
      >
        <Link
          to="/blog"
          className="inline-block px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
        >
          Read More Posts
        </Link>
      </motion.div>
    </motion.div>
  );
}