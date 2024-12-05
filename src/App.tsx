import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import Blog from './pages/Blog';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}