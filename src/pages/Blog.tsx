import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/animations';
import AnimatedText from '../components/shared/AnimatedText';
import BlogCard from '../components/Blog/BlogCard';
import { getBlogPost } from '../utils/blogUtils';


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const slugs = [ 'Basics-Of-UIUX', 'Starting-Journey', ];
      const loadedPosts = await Promise.all(
        slugs.map(async (slug) => {
          const { frontmatter } = await getBlogPost(slug);
          return {
            id: slug,
            title: frontmatter.title,
            excerpt: frontmatter.excerpt,
            image: frontmatter.coverImage,
            date: frontmatter.date,
            readTime: frontmatter.readTime,
            category: frontmatter.category
          };
        })
      );
      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-2">
      <motion.div 
        className="container mx-auto px-6 py-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-8"
          variants={fadeIn('up')}
        >
          <AnimatedText 
            text="Latest Blog Posts"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 pt-6 overflow-visible"
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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