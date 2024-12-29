import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

export default function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-2 py-1 md:px-3 md:py-2 text-sm md:text-base rounded-lg transition-all ${
        active
          ? 'text-white bg-pink-600 shadow-lg'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        initial={false}
        animate={{
          color: active ? 'white' : '',
        }}
      >
        {children}
      </motion.span>
      
      {active && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg -z-10"
          layoutId="activeTab"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      )}
    </motion.button>
  );
}