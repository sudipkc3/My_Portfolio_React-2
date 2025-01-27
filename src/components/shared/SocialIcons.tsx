import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Github, Facebook, Instagram, Linkedin } from "lucide-react";

interface SocialIconCardProps {
  icon: React.ElementType;
  name: string;
  username: string;
  profilePic: string;
  profileLink: string;
  isHovered: boolean;
  setHovered: (hovered: boolean) => void;
}

const SocialIconCard: React.FC<SocialIconCardProps> = ({
  icon: Icon,
  name,
  username,
  profilePic,
  profileLink,
  isHovered,
  setHovered,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setHovered(false);
      }
    };

    if (isHovered) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHovered, setHovered]);

  return (
    <div
      className="relative group"
      onClick={() => setHovered(!isHovered)}
      ref={cardRef}
    >
      <motion.div
        whileHover={{ 
          y: -5,
          rotate: [0, -10, 10, -10, 0],
          scale: 1.2 
        }}
        transition={{ duration: 0.3 }}
        layout
        className="cursor-pointer"
      >
        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-300 md:w-6 md:h-6" />
      </motion.div>
      {/* Popup */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.3 },
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            layout
            className="absolute left-1/2 bottom-full mb-4 -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 transition-all duration-200 pointer-events-auto w-56 md:w-64"
          >
            <div className="flex items-center space-x-2 md:space-x-3">
              <img
                src={profilePic}
                alt={`${name} profile`}
                className="w-12 h-12 rounded-full border-2 border-purple-300 animate-glow md:w-16 md:h-16"
              />
              <div className="flex flex-col">
                <h3 className="text-md font-semibold md:text-lg">{name}</h3>
                <p className="text-xs text-gray-500 md:text-sm">@{username}</p>
                <a
                  href={profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition-transform transform hover:scale-105 animate-glow md:mt-2 md:px-4 md:py-2"
                >
                  Visit Profile
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialIcons: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      icon: Github,
      name: "Sudip KC",
      username: "sudipkc3",
      profilePic: "/Images/SocialIcon.webp",
      profileLink: "https://github.com/sudipkc3",
    },
    {
      icon: Facebook,
      name: "Sudeep Kay Cee",
      username: "KCSudip3",
      profilePic: "/Images/SocialIcon.webp",
      profileLink: "https://www.facebook.com/KCSudip3",
    },
    {
      icon: Instagram,
      name: "Sudeep Kay Cee",
      username: "kcsudip3",
      profilePic: "/Images/SocialIcon.webp",
      profileLink: "https://www.instagram.com/kcsudip3",
    },
    {
      icon: Linkedin,
      name: "Sudip KC",
      username: "kcsudip3",
      profilePic: "/Images/SocialIcon.webp",
      profileLink: "https://www.linkedin.com/in/kcsudip3",
    },
  ];

  return (
    <LayoutGroup>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <SocialIconCard
            key={index}
            {...social}
            isHovered={hoveredIndex === index}
            setHovered={(hovered) => setHoveredIndex(hovered ? index : null)}
          />
        ))}
      </div>
    </LayoutGroup>
  );
};

export default SocialIcons;
