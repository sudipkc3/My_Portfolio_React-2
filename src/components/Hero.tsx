import { motion } from 'framer-motion';
import { Github, Facebook, Instagram, Linkedin } from 'lucide-react'; // Ensure all icons are correctly imported
import { fadeIn, slideIn } from '../utils/animations';
import { useState, useEffect } from 'react';

export default function Hero() {
  const socialLinks = [
    { href: 'https://github.com/Sudeepkaycee289', icon: Github, label: 'GitHub' }, // Ensure all icons are correctly used
    { href: 'https://www.facebook.com/sudipkc289', icon: Facebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/sudipkc289/', icon: Instagram, label: 'Instagram' },
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
  ];

  const programmerTitles = [
    "Programmer",
    "Frontend Developer",
    "Technical Writer",
    "Documentation Specialist",
    "Proposal Writer",
  ];

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [currentProgrammerTitle, setCurrentProgrammerTitle] = useState(programmerTitles[0]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [programmerTitleIndex, setProgrammerTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [deletingProgrammer, setDeletingProgrammer] = useState(false);

  useEffect(() => {
    const handleTitleChange = () => {
      if (deleting) {
        if (currentTitle.length > 0) {
          setCurrentTitle(currentTitle.slice(0, -1));
        } else {
          setDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      } else {
        if (currentTitle.length < titles[titleIndex].length) {
          setCurrentTitle(titles[titleIndex].slice(0, currentTitle.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const handleProgrammerTitleChange = () => {
      if (deletingProgrammer) {
        if (currentProgrammerTitle.length > 0) {
          setCurrentProgrammerTitle(currentProgrammerTitle.slice(0, -1));
        } else {
          setDeletingProgrammer(false);
          setProgrammerTitleIndex((prevIndex) => (prevIndex + 1) % programmerTitles.length);
        }
      } else {
        if (currentProgrammerTitle.length < programmerTitles[programmerTitleIndex].length) {
          setCurrentProgrammerTitle(programmerTitles[programmerTitleIndex].slice(0, currentProgrammerTitle.length + 1));
        } else {
          setTimeout(() => setDeletingProgrammer(true), 500); // Pause before deleting
        }
      }
    };

    const titleInterval = setInterval(handleTitleChange, 200);
    const programmerTitleInterval = setInterval(handleProgrammerTitleChange, 200);

    return () => {
      clearInterval(titleInterval);
      clearInterval(programmerTitleInterval);
    };
  }, [currentTitle, currentProgrammerTitle, deleting, deletingProgrammer, titleIndex, programmerTitleIndex]);

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-pink-900 opacity-50" />

      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left space-y-6"
            variants={slideIn('left')}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn('up', 0.2)}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 min-h-[2.5rem]">{currentTitle}</p>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 min-h-[2.5rem]">{currentProgrammerTitle}</p>
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
                  style={{ display: 'inline-block' }}
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
                src="./src/Images/Container right.jpg"
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