import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../shared/Animation JSON/Arrow 02.json';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  index: number;
  link:string;
}
    
export default function BlogCard({ id, title, excerpt, image, date, readTime, category, slug, index, link }: BlogCardProps) {
  return (
    <motion.article
      variants={fadeIn('up', index * 0.2)}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
        <div className="relative h-48 overflow-hidden">
          <Link to={`/blog/${slug}`} className='block'>
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            <Link to={`/blog/${slug}`}>
              {title}
            </Link>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {excerpt}
          </p>

          <Link to={`/blog/${slug}`}>
            <span
              className="inline-flex items-center text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400"
            >
              Read More
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="inline-block ml-2 w-6 h-6"
              />
            </span>
          </Link>
        </div>
    </motion.article>
  );
}
