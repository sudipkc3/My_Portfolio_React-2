import { Route } from 'react-router-dom';
import BlogPostPage from '../../components/Blog/BlogPostPage';
import BlogList from '../../pages/Blog';

export const BlogRoutes = [
  <Route key="blog-list" path="/blog" element={<BlogList />} />,
  <Route key="blog-post" path="/blog/:slug" element={<BlogPostPage />} />
];