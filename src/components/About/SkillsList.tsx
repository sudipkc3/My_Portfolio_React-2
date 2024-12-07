import { motion } from 'framer-motion';


interface Skill {
  category: string;
  items: string[];
}

interface SkillsListProps {
  skills: Skill[];
}

export default function SkillsList({ skills }: SkillsListProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill) => (
        <motion.div 
          key={skill.category} 
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          variants={item}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-500 mb-4 flex items-center">
            <span className="w-2 h-2 bg-pink-600 dark:bg-pink-500 rounded-full mr-2" />
            {skill.category}
          </h3>
          <ul className="space-y-2">
            {skill.items.map((item) => (
              <motion.li
                key={item}
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition-colors cursor-default flex items-center"
                whileHover={{ x: 5, color: '#ec4899' }}
              >
                <motion.span 
                  className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"
                  whileHover={{ scale: 1.5, backgroundColor: '#ec4899' }}
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}