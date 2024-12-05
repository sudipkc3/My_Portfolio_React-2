import { Mail, Phone, Github, Facebook, Instagram, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';


export default function Contact() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sudeepkaycee289', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/sudipkc289', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sudipkc289/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sudip-kc-946097211/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-pink-600" />
                  sudipkc289@gmail.com
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-pink-600" />
                  9806735504
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <a
                href="/Images/Sudip Kc CV.pdf"
                download
                className="inline-block px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      
      <div className="mt-12 py-4 relative overflow-hidden" style={{ height: '3rem' }}>
        <motion.div
          className="text-gray-500 dark:text-gray-400 absolute"
          style={{ fontFamily: 'cursive', whiteSpace: 'nowrap', textAlign: 'center', width: '100%', fontSize: '1.25rem', letterSpacing: '0.2rem' }}
        >
          <motion.p
            style={{ display: 'inline-block', minWidth: '100%' }}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 15, 
              ease: 'linear',
            }}
            whileHover={{ scale: 1.1, color: '#ff69b4' }}
          >
            {"© 2024 Sudip KC. All rights reserved.".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{ display: 'inline-block' }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}