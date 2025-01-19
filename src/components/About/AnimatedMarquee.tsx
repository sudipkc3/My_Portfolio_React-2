import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedMarquee = ({ 
  items = [
    "🌟 UI Design",
    "🎉 UX Research",
    "🚀 Frontend Developer",
    "💫 Dashboard Design",
    "💻 Web Design",
    "🖥 Developer",
    "📱 App Design",
    "📑 Wireframing",
    "📎 Prototyping",
    "🎨 Designer",
  ]
}) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition(prev => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(animation);
  }, [items.length]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg min-h-[120px] group">
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
      
      {/* Marquee content */}
      <div className="relative h-16 z-10 flex items-center justify-center">
        {items.map((item, index) => {
          const isActive = index === position;

          return (
            <motion.div
              key={item}
              className={`absolute w-full text-center transition-all duration-500 ease-in-out transform ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center h-full">
                <span 
                  className="text-2xl font-bold text-white tracking-wide inline-block"
                  style={{
                    animation: `fadeInOut 3s ease-in-out infinite`
                  }}
                >
                  {item}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedMarquee;
