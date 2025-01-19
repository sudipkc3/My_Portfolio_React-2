import { motion } from "framer-motion"; 
import { useState } from "react";

const FizzyButton = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom: { x: number; y: number }) => ({
    scale: [1, 0.5, 1.2, 0],
    opacity: [1, 0.8, 0.5, 0],
    x: custom.x,
    y: custom.y,
    transition: {
      duration: 1.2,
      times: [0, 0.3, 0.6, 1],
      ease: "easeOut",
    },
  }),
};

const FizzyButtonComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    if (isOpen) {
      const link = document.createElement('a');
      link.href = '/public/Images/Sudip Kc CV.pdf';
      link.download = 'Sudip Kc CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      layout
      data-isopen={isOpen} // Changed from data-isOpen to data-isopen
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={handleDownload}
    >
      <motion.div layout className="child">
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#9333ea",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-3 py-3 text-white text-sm font-medium uppercase bg-blue-800 rounded-lg shadow-md"
          >
            {isOpen ? "Download CV" : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-folder-down"
                animate={{ rotate: [20, -20, 20] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
                <path d="M12 10v6"/>
                <path d="m15 13-3 3-3-3"/>
              </motion.svg>
            )}
            <div className="absolute top-0 left-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-[#222] rounded-full"
                  variants={FizzyButton} 
                  initial="hidden"
                  animate="visible"
                  custom={{
                    x: i === 0 ? -25 : i === 1 ? 25 : 0,
                    y: i === 0 ? -25 : i === 1 ? 25 : -15,
                  }}
                />
              ))}
            </div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default FizzyButtonComponent;
