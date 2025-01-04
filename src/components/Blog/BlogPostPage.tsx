import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getBlogPost } from '../../utils/blogUtils';
import BlogPost from './BlogPost';
import BlogContent from './BlogContent';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (!slug) return;
        console.log("slugis",slug);
        const postData = await getBlogPost(slug);
        setPost(postData);
      } catch (error) {
        console.error(`Error loading blog post (${slug}):`, error);
        navigate('/blog', { replace: true });
      }
    };

    loadPost();
  }, [slug, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{post.frontmatter.title} - Sudip KC</title>
        <meta name="description" content={post.frontmatter.excerpt} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.excerpt} />
        <meta property="og:image" content={post.frontmatter.coverImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <BlogPost frontmatter={post.frontmatter} content={<BlogContent content={post.content} />} />
    </div>
  );
};

export default BlogPostPage;
