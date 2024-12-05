import { useState } from 'react';

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300"
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
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300"
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
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}