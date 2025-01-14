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
        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-all duration-300" />
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
            className="absolute left-1/2 bottom-8 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 transition-all duration-200 pointer-events-auto w-64"
          >
            <div className="flex items-center space-x-4">
              <img
                src={profilePic}
                alt={`${name} profile`}
                className="w-16 h-16 rounded-full border-2 border-purple-300 animate-glow"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">@{username}</p>
                <a
                  href={profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl shadow-lg hover:from-purple-500 hover:to-pink-500 transition-transform transform hover:scale-105 animate-glow"
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
      profilePic: "public/Images/SocialIcon.png",
      profileLink: "https://github.com/sudipkc3",
    },
    {
      icon: Facebook,
      name: "Sudeep Kay Cee",
      username: "KCSudip3",
      profilePic: "public/Images/SocialIcon.png",
      profileLink: "https://www.facebook.com/KCSudip3",
    },
    {
      icon: Instagram,
      name: "Sudeep Kay Cee",
      username: "kcsudip3",
      profilePic: "public/Images/SocialIcon.png",
      profileLink: "https://www.instagram.com/kcsudip3",
    },
    {
      icon: Linkedin,
      name: "Sudip KC",
      username: "kcsudip3",
      profilePic: "public/Images/SocialIcon.png",
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
