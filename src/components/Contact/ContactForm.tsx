import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  autocomplete?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ autocomplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log('Form submitted:', formData);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-6">
      {formSubmitted ? (
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-6xl"
          >
            🚀
          </motion.div>
          <p className="text-lg text-center text-gray-900 dark:text-gray-100">
            Thanks for reaching out, <span className="font-bold">{formData.name || "Friend"}</span>!
            <br />
            I’ll respond within 24 hours.
          </p>
        </div>
      ) : (
        <form action="https://formspree.io/f/xkgnzvbp" method="post" onSubmit={handleSubmit} className="space-y-4 w-full" autoComplete={autocomplete}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-purple-100 dark:bg-gray-700 border-2 border-purple-200 focus:border-gradient-to-r focus:from-pink-600 focus:to-blue-400 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 cursor-pointer"
              autoComplete="name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-purple-100 dark:bg-gray-700 border-2 border-purple-200 focus:border-gradient-to-r focus:from-pink-600 focus:to-blue-400 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 cursor-pointer"
              autoComplete="email"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-purple-100 dark:bg-gray-700 border-2 border-purple-200 focus:border-gradient-to-r focus:from-pink-600 focus:to-blue-400 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 resize-none cursor-pointer "
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-pink-600 to-blue-400 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-colors duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
