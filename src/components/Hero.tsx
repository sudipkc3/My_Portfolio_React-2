import { motion } from 'framer-motion';
import { Github, Facebook, Instagram, Linkedin } from 'lucide-react'; // Ensure all icons are correctly imported
import { fadeIn, slideIn } from '../utils/animations';
import { useState, useEffect } from 'react';
import ModernDownloadButton from './shared/ModernDownloadButton'; // Import the new component

export default function Hero() {
  const socialLinks = [
    { href: 'https://github.com/Sudeepkaycee289', icon: Github, label: 'GitHub' }, // Ensure all icons are correctly used
    { href: 'https://www.facebook.com/kcsudip3', icon: Facebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/kcsudip3/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/sudip-kc-946097211/', icon: Linkedin, label: 'LinkedIn' },
  ];

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const titles = [
    "UI/UX Designer",
    "Visual Designer",
    "Web Designer",
    "Frontend Developer",
  ];

  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeletingTitle, setIsDeletingTitle] = useState(false);

  useEffect(() => {
    const handleTyping = (
      titles: string[],
      setText: React.Dispatch<React.SetStateAction<string>>,
      text: string,
      isDeleting: boolean,
      setDeleting: React.Dispatch<React.SetStateAction<boolean>>,
      index: number,
      setIndex: React.Dispatch<React.SetStateAction<number>>
    ) => {
      const currentWord = titles[index % titles.length];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === "") {
        setDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const titleTypingInterval = setInterval(
      () =>
        handleTyping(
          titles,
          setCurrentTitle,
          currentTitle,
          isDeletingTitle,
          setIsDeletingTitle,
          titleIndex,
          setTitleIndex
        ),
      isDeletingTitle ? 50 : 100
    );

    return () => {
      clearInterval(titleTypingInterval);
    };
  }, [currentTitle, isDeletingTitle, titleIndex]);

  useEffect(() => {
    setCurrentTitle("");
    setIsDeletingTitle(false);
  }, [titleIndex]);

  return (
    <section className="pt-10 relative overflow-hidden"> {/* Section with left and right margin */}
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700" /> {/* Adjusted to fill container */}
      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left space-y-6"
            variants={slideIn('left')}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn('up', 0.2)}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 min-h-[2.5rem]">
                <motion.span
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: "0px 0px 8px rgba(255, 0, 255, 0.8)",
                    transition: { repeat: Infinity, duration: 1, ease: "easeInOut" }
                  }}
                >
                  {currentTitle}
                </motion.span>
                <motion.span
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-5 w-1 ml-1 typing-cursor"
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                ></motion.span>
              </p>
            </motion.div>

            <motion.div 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white pb-6 hidden md:block" // Added bottom padding and hidden on mobile
              initial="hidden"
              animate="visible"
            >
              {"Hi, I'm Sudip Kc from".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  custom={index} 
                  variants={letterAnimation}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                  style={{ display: 'inline-block' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              {"Nepal.".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  custom={index} 
                  variants={letterAnimation}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                  style={{ display: 'inline-block', WebkitTextStroke: '1px #ff004f' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <div className="text-2xl font-bold text-gray-900 dark:text-white pb-6 md:hidden"> {/* Simple mobile view */}
              Hi, I'm Sudip Kc from Nepal.
            </div>

            <motion.div 
              className="flex justify-center md:justify-start space-x-6 mt-6" // Added margin-top for gap
              variants={fadeIn('up', 0.4)}
              >
              {socialLinks.map((link, ) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition-all duration-300"
                    whileHover={{ 
                      y: -5,
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
            <ModernDownloadButton /> {/* Add the new component here */}
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            variants={slideIn('right')}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto profile-image"
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src="/Images/Container right.jpg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
