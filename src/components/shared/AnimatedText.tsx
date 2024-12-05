import React from 'react';
import { motion } from 'framer-motion';
import { textReveal } from '../../utils/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <motion.div className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={textReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          transition={{ delay: i * 0.1 + delay }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}