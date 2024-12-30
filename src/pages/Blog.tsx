import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/animations';
import AnimatedText from '../components/shared/AnimatedText';
import BlogCard from '../components/Blog/BlogCard';
import { getBlogPost, getAllBlogSlugs } from '../utils/blogUtils'; // Import the function to get all blog slugs
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
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const slugs = await getAllBlogSlugs(); // Fetch all blog slugs dynamically
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
      } catch (error) {
        console.error('Error loading posts:', error);
      }
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