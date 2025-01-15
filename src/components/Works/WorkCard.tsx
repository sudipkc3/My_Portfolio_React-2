import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import AnimatedImage from '../shared/AnimatedImage';

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  tags: string[];
  index: number;
}

export default function WorkCard({ title, description, image, alt, link, tags, index }: WorkCardProps) {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.2)}
      className="bg-purple-100 dark:bg-gray-600 rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto sm:max-w-none"
    >
      <div className="relative h-64 overflow-hidden sm:h-48">
        <AnimatedImage
          src={image}
          alt={alt} // Use alt property
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 sm:p-4">
        <h3 className="text-2xl font-bold text-white dark:text-gray mb-3 sm:text-xl">{title}</h3>
        <p className="text-gray-600 dark:text-white mb-4 sm:mb-2 text-sm sm:text-base">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-Fuchsia-400 text-white-950 dark:text-black rounded-full text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 text-sm sm:text-base"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          View Project <ExternalLink className="w-4 h-4 text-gray-900 dark:text-white" />
        </motion.a>
      </div>
    </motion.div>
  );
}
