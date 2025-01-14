import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/animations';
import AnimatedText from '../components/shared/AnimatedText';
import BlogCard from '../components/Blog/BlogCard';
import LottieIcon from '../components/shared/LottieIcon';
import backgroundAnimation from '../components/shared/Animation JSON/Background 01.json';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
 link:string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch('/blogs/index.json');
        const data = await response.json();
        const loadedPosts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          excerpt: post.summary,
          image: post.coverImage || '',
          date: post.date,
          readTime: post.readTime,
          category: post.category || 'Uncategorized',
          slug: post.slug,
          link:post.link
        }));
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-pink-300 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 pt-2">
      <motion.div
        className="container mx-auto px-6 py-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center mb-8 relative"
          variants={fadeIn('up')}
        >
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <LottieIcon
              animationData={backgroundAnimation}
              width={300}
              height={200}
            />
          </div>
          <AnimatedText
            text="Latest Blog Posts"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 pt-6 relative z-10 overflow-visible"
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto relative z-10">
            Thoughts, tutorials, and insights about design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} {...post} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
