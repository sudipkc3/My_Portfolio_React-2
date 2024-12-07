import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/animations';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AnimatedImage({ src, alt, className = '' }: AnimatedImageProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}