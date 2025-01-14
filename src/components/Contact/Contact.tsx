import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import SocialIcons from '../shared/SocialIcons';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-6 bg-gradient-to-r from-blue-200 via-pink-300 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <p 
                  className="flex items-center text-gray-600 dark:text-gray-400"
                  onClick={() => window.open('mailto:sudipkc289@gmail.com')}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 30 }}>
                    <Mail className="w-5 h-5 mr-3 text-pink-600" />
                  </motion.div>
                  sudipkc289@gmail.com
                </p>
                <p 
                  className="flex items-center text-gray-600 dark:text-gray-400"
                  onClick={() => window.open('tel:9806735504')}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 30 }}>
                    <Phone className="w-5 h-5 mr-3 text-pink-600" />
                  </motion.div>
                  9806735504
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400"
                onClick={() => window.open('https://wa.me/9806735504')}>
                  <motion.div whileHover={{ scale: 1.2, rotate: 30 }}>
                    <MessageSquare className=" w-5 h-5 mr-3 text-pink-600" />
                  </motion.div>
                  Whatsapp
                </p>

              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <SocialIcons/>
            </div>
            <div>
              <motion.a
                href="/Images/Sudip Kc CV.pdf"
                download
                className="inline-block px-8 py-3 text-white rounded-lg transition-colors duration-300 bg-gradient-to-r from-pink-600 to-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <ContactForm autocomplete="on" />
          </motion.div>
        </div>
      </div>
      
      <div className="mt-4 py-1 relative overflow-hidden" style={{ height: '3rem' }}>
        <motion.div
          className="text-gray-500 dark:text-gray-400 absolute"
          style={{ fontFamily: 'rajdhani', whiteSpace: 'nowrap', textAlign: 'center', width: '100%', fontSize: '1.50rem', letterSpacing: '0.2rem' }}
        >
          <motion.p
            style={{ display: 'inline-block', minWidth: '100%', color: 'currentColor' }}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 15, 
              ease: 'linear',
            }}
          >
            {"© 2025 Sudip KC. All rights reserved.".split("").map((char, index) => (
              <motion.span
                key={index}
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
