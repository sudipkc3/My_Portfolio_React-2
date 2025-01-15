import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/animations";
import { useState, useEffect } from "react";
import FizzyButton from "./shared/FizzyButton";
import SocialIcons from "./shared/SocialIcons";

export default function Hero() {
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

  const titles = ["Web Designer", "Frontend Developer", "Web Developer"];

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

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/Images/Sudipkc.jpg";
    document.head.appendChild(link);
  }, []);

  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-10 relative overflow-hidden">
      {" "}
      {/* Section with left and right margin */}
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-pink-300 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700" />{" "}
      {/* Adjusted to fill container */}
      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-6"
            variants={slideIn("left")}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn("up", 0.2)}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                UI/UX{" "}
                <span className="bg-gradient-to-r from-pink-600 via-purple-400 to-blue-500 dark:from-pink-400 dark:via-purple-200 dark:to-blue-300 bg-clip-text text-transparent">
                  Designer
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 min-h-[2.5rem]">
                <motion.span
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-300 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent"
                  animate={{
                    textShadow: "0px 0px 8px rgba(255, 0, 255, 0.8)",
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {currentTitle}
                </motion.span>
                <motion.span
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-5 w-1 ml-1 typing-cursor"
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                ></motion.span>
              </div>
            </motion.div>

            <motion.div
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white pb-6 hidden md:block" // Added bottom padding and hidden on mobile
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={letterAnimation}
                style={{ display: "inline-block" }}
              >
                Hi, I'm Sudip Kc from Nepal.
              </motion.span>
            </motion.div>

            <div className="text-2xl font-bold text-gray-900 dark:text-white pb-6 md:hidden">
              {" "}
              {/* Simple mobile view */}
              Hi, I'm Sudip Kc <br></br>from Nepal.
            </div>
            <span className="flex flex-col items-center md:items-start gap-4">
              <SocialIcons />
              <div className="flex space-x-4 mt-4 md:mt-0">
                <FizzyButton />
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
                  onClick={handleHireMeClick}
                >
                  Hire Me
                </button>
              </div>
            </span>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={slideIn("right")}
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
                ease: "easeInOut",
              }}
            >
              <motion.img
                src="/Images/Container right.webp"
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
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
