import { motion } from "framer-motion";
import AIIcon from "../../Icons/AI.svg";
import CSSIcon from "../../Icons/CSS.svg";
import FigmaIcon from "../../Icons/Figma.svg";
import GitIcon from "../../Icons/Git.svg";
import GithubIcon from "../../Icons/Github.svg";
import HTMLIcon from "../../Icons/HTML.svg";
import IllustratorIcon from "../../Icons/Illustrator.svg";
import JavaScriptIcon from "../../Icons/JavaScript.svg";
import OfficeIcon from "../../Icons/Office 365.svg";
import PhotoshopIcon from "../../Icons/Photoshop.svg";
import ReactIcon from "../../Icons/React.svg";
import TailwindIcon from "../../Icons/Tailwind CSS.svg";
import VSCodeIcon from "../../Icons/VSCode.svg";
import XDIcon from "../../Icons/XD.svg";
import SectionTitle from "../shared/SectionTitle";

const icons = [
  { src: FigmaIcon, alt: "Figma", name: "Figma" },
  { src: XDIcon, alt: "XD", name: "XD" },
  { src: IllustratorIcon, alt: "Illustrator", name: "Illustrator" },
  { src: PhotoshopIcon, alt: "Photoshop", name: "Photoshop" },
  { src: OfficeIcon, alt: "Office 365", name: "Office 365" },
  { src: GitIcon, alt: "Git", name: "Git" },
  { src: GithubIcon, alt: "Github", name: "Github" },
  { src: AIIcon, alt: "AI", name: "AI" },
  { src: HTMLIcon, alt: "HTML", name: "HTML" },
  { src: CSSIcon, alt: "CSS", name: "CSS" },
  { src: TailwindIcon, alt: "Tailwind CSS", name: "Tailwind CSS" },
  { src: JavaScriptIcon, alt: "JavaScript", name: "JavaScript" },
  { src: ReactIcon, alt: "React", name: "React" },
  { src: VSCodeIcon, alt: "VSCode", name: "VSCode" },
];

// Framer Motion animation settings
const carouselVariants = {
  animate: {
    x: ["0%", "-50%"], // Moves left by half of its total width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const InfiniteCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-gray-100 dark:bg-gray-900">
      <SectionTitle title="My Toolstack" />
      
      <div className="relative max-w-[960px] mx-auto overflow-hidden">
        {/* Fading Gradient (Left) */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent z-10"></div>
        
        {/* Carousel Track */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex w-max"
            variants={carouselVariants}
            animate="animate"
          >
            {[...icons, ...icons].map((icon, index) => ( // Duplicate for seamless looping
              <div key={index} className="flex flex-col items-center w-[100px]">
                <motion.img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-[50px] h-[50px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                />
                <span className="mt-2 text-sm text-black dark:text-gray-100">
                  {icon.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fading Gradient (Right) */}
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
