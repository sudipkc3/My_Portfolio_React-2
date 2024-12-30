import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const FlowingLines = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Horizontal flowing lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      {/* Wave patterns at different heights */}
      {Array.from({ length: 50 }).map((_, i) => (
        <path
          key={i}
          d={`M -20,${i * 4} Q 50,${i * 4 + (i % 2 ? 20 : -20)} 100,${i * 4} T 220,${i * 4}`}
          fill="none"
          stroke={getRandomColor()}
          strokeWidth="0.3"
          className="opacity-50" 
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from={i % 2 ? "-200 0" : "0 0"}
            to={i % 2 ? "0 0" : "200 0"}
            dur={`${3 + (i % 5)}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}
    </svg>

    {/* Vertical flowing lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      {Array.from({ length: 50 }).map((_, i) => (
        <path
          key={i}
          d={`M ${i * 4},-20 Q ${i * 4 + (i % 2 ? 20 : -20)},50 ${i * 4},100 T ${i * 4},220`}
          fill="none"
          stroke={getRandomColor()}
          strokeWidth="0.3"
          className="opacity-30"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from={i % 2 ? "0 -200" : "0 0"}
            to={i % 2 ? "0 0" : "0 200"}
            dur={`${4 + (i % 5)}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}
    </svg>

    {/* Diagonal flowing lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      {Array.from({ length: 50 }).map((_, i) => (
        <path
          key={i}
          d={`M ${i * 4},0 Q ${100},${100} ${200 - i * 4},200`}
          fill="none"
          stroke={getRandomColor()}
          strokeWidth="0.3"
          className="opacity-20"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,60;8,16"
            dur={`${3 + (i % 5)}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}
    </svg>
  </div>
);

const VerticalBorders = () => (
  <>
    {[0, 25, 50, 75, 100].map((position, i) => (
      <div 
        key={i}
        className="absolute top-0 h-full w-[1px] overflow-hidden"
        style={{ left: `${position}%` }}
      >
        <div 
          className="h-full w-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20"
          style={{
            animation: `borderFlow ${2 + i * 0.5}s linear infinite ${i * 0.2}s`
          }}
        />
      </div>
    ))}
  </>
);

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
        @keyframes borderFlow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes smoothInOut {
          0%, 100% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {/* Background patterns */}
      <FlowingLines />
      <VerticalBorders />
      
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
                    animation: `smoothInOut 3s ease-in-out infinite`
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
