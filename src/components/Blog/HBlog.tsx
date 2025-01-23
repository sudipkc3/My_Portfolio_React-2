import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import AnimatedText from '../shared/AnimatedText';
import BlogCard from './BlogCard';

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  link: string;
};

export default function HBlog() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/blogs/index.json')
      .then(response => response.json())
      .then(data => {
        setLatestPosts(data.slice(0, 3));
      });
  }, []);

  return (
    <section id="blog" className="py-14 bg-gradient-to-r from-blue-200 via-pink-300 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <motion.div 
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn('up')}
        >
          <AnimatedText 
            text="Latest Blog Posts"
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:text-3xl"
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:text-base">
            Insights and updates from my latest articles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              title={post.title} 
              excerpt={post.summary} 
              image={post.coverImage} 
              date={post.date} 
              readTime={post.readTime} 
              category={post.category} 
              slug={post.slug} 
              index={index} 
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          variants={fadeIn('up')}
        >
          <Link
            to="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-blue-400 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 sm:px-6 sm:py-2"
          >
            View All Blogs
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
