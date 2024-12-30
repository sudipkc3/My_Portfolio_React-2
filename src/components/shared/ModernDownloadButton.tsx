import { useState } from 'react';
import { motion } from 'framer-motion';

const ModernDownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/public/Images/Sudip Kc CV.pdf'; // Updated path to the PDF file
    link.download = 'Sudip Kc CV.pdf';
    link.click();
  };

  return (
    <div className="relative flex justify-center md:justify-start"> {/* Adjust alignment for mobile and desktop */}
      <motion.svg 
        viewBox="0 0 180 70" // Adjusted viewBox to make the button smaller
        className={`w-full max-w-[180px] md:max-w-[150px] cursor-pointer transition-all duration-700 ${
          isHovered ? 'scale-110' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDownload}
      >
        <defs>
          {/* Modern gradient with vibrant colors */}
          <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3399">
              <animate
                attributeName="stop-color"
                values="#ff3399;#9333ea;#ff3399"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#831843">
              <animate
                attributeName="stop-color"
                values="#831843;#ff3399;#831843"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#9333ea">
              <animate
                attributeName="stop-color"
                values="#9333ea;#831843;#9333ea"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Pulse effect gradient */}
          <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3399" stopOpacity="0.3">
              <animate
                attributeName="stop-opacity"
                values="0.3;0;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </radialGradient>

          {/* Modern glow effect */}
          <filter id="modernGlow">
            <feGaussianBlur stdDeviation={isHovered ? "4" : "2"} result="blur"/>
            <feFlood floodColor="#ff3399" floodOpacity={isHovered ? "0.8" : "0.5"} result="glowColor"/>
            <feComposite in="glowColor" in2="blur" operator="in" result="softGlow"/>
            <feMerge>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background with pulse effect */}
        {/* <rect
          width="180"
          height="70"
          rx="16"
          fill="url(#pulseGradient)"
          className="transition-all duration-500"
        /> */}

        {/* Dynamic border */}
        <rect
          x="4"
          y="4"
          width="172"
          height="62"
          rx="14"
          fill="none"
          stroke="url(#modernGradient)"
          strokeWidth="2"
          className={`transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`}
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,1000;1000,0;0,1000"
            dur="6s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Animated flowing particles */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`particle-${i}`}
            r="2"
            fill="#ff3399"
            opacity={isHovered ? "0.6" : "0.4"}
            className="transition-opacity duration-300"
          >
            <animateMotion
              path={`M${-50 + (i % 4) * 20},35 
                     C${75},${20 + (i % 3) * 20} ${225},${20 + (i % 3) * 20} ${350 - (i % 4) * 20},35
                     C${225},${50 - (i % 3) * 20} ${75},${50 - (i % 3) * 20} ${-50 + (i % 4) * 20},35`}
              dur={`${10 + i * 0.5}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="2;3;2"
              dur={`${1 + i * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Main text with modern styling */}
        <text
          x="90"
          y="40"
          textAnchor="middle"
          fill="white"
          filter="url(#modernGlow)"
          className={`text-lg font-bold transition-all duration-500 ${
            isHovered ? 'scale-110' : ''
          }`}
          style={{ fontFamily: 'rajdhani', stroke: 'black', strokeWidth: '0.4px' }} // Added black border
        >
          Download CV
        </text>
      </motion.svg>
    </div>
  );
};

export default ModernDownloadButton;
