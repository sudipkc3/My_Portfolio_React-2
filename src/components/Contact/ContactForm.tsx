import React from 'react';
import { useState } from 'react';

interface ContactFormProps {
  autocomplete?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ autocomplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form action="https://formspree.io/f/xkgnzvbp" method="post" onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto" autoComplete={autocomplete}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-gradient-to-r focus:from-purple-400 focus:via-pink-500 focus:to-red-500 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 cursor-pointer"
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
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-gradient-to-r focus:from-purple-400 focus:via-pink-500 focus:to-red-500 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 cursor-pointer"
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
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-gradient-to-r focus:from-purple-400 focus:via-pink-500 focus:to-red-500 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 resize-none cursor-pointer"
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-colors duration-300 cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;