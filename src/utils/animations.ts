import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  },
});

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0): Variants => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 100,
      delay,
    },
  },
});

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};