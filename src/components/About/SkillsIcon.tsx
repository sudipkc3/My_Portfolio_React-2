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

const zigzagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hover: {
    scale: 1.2,
    transition: {
      yoyo: Infinity,
    },
  },
};

const SkillsIcon = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 via-pink-300 to-purple-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 text-gray-900 dark:text-gray-100 p-2">
        <SectionTitle
          title="My Toolstack"
        />
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2 items-center justify-center">
          {icons.slice(0, 12).map((icon, index) => (
            <div key={icon.alt} className="flex flex-col items-center">
              <motion.img
                src={icon.src}
                alt={icon.alt}
                className="w-10 h-10"
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={zigzagVariants}
              />
              <span className="mt-2 text-lg text-gray-900 dark:text-gray-100">
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsIcon;
