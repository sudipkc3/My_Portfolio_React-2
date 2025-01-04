import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import ScrollToTop from './components/ScrollToTop';
import { BlogRoutes } from './components/Blog/BlogRoutes';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation from other pages
    if (location.hash && location.pathname !== '/') {
      navigate('/', { state: { scrollTo: location.hash.substring(1) } });
    }
  }, [location.hash, location.pathname, navigate]);

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <ScrollToTop />
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            {BlogRoutes}
            <Route path="*" element={<Home />} /> {/* Catch-all route */}
          </Routes>
        </main>
      </div>
    </HelmetProvider>
  );
}
