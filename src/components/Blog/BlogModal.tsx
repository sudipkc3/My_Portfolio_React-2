import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import BlogPost from './BlogPost';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export default function BlogModal({ isOpen, onClose, frontmatter, content }: BlogModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="h-full overflow-y-auto custom-scrollbar">
              <BlogPost frontmatter={frontmatter} content={content} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}