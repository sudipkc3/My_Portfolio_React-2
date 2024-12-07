import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import BlogModal from './BlogModal';
import { getBlogPost } from '../../utils/blogUtils';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  index: number;
}

export default function BlogCard({ id, title, excerpt, image, date, readTime, category, index }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  const handleReadMore = async () => {
    const post = await getBlogPost(id);
    setModalContent(post);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.article
        variants={fadeIn('up', index * 0.2)}
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
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
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {excerpt}
          </p>

          <motion.button
            onClick={handleReadMore}
            className="inline-block text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Read More →
          </motion.button>
        </div>
      </motion.article>

      {modalContent && (
        <BlogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          frontmatter={modalContent.frontmatter}
          content={modalContent.content}
        />
      )}
    </>
  );
}