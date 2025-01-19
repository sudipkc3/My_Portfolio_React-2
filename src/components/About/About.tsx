import { useState } from 'react';
import { motion } from 'framer-motion';
import TabButton from './TabButton';
import SkillsList from './SkillsList';
import { fadeIn, staggerContainer } from '../../utils/animations';
import AnimatedText from '../shared/AnimatedText';
import Lottie from 'lottie-react';
import animationData from '../shared/Animation JSON/Here Arrow.json';
import AnimatedMarquee from './AnimatedMarquee';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = {
    skills: {
      content: [
        {
          category: 'Design',
          items: [
            'UX Research',
            'UI/Interaction Design',
            'Agile Development',
            'Wireframing',
            'Prototyping',
            'Data Analysis',
            'Illustrations'
          ]
        },
        {
          category: 'Soft Skills',
          items: [
            'Presentation',
            'Documentation',
            'Communication',
            'Time Management',
            'Problem Solving',
            'Teamwork',
            'Adaptability'
          ]
        }
      ]
    },
    experience: {
      content: [
        {
          category: 'Professional Experience',
          items: [
            '2023 - Current: UI/UX Designer',
            '2020 - Current: Frontend Developer',
          ]
        },
        {
          category: 'Projects',
          items: [
            'E-commerce Platform Design',
            'Cook it Yourself Recipe App',
            'Web Application Architecture'
            ]
        }
      ]
    },
    education: {
      content: [
        {
          category: 'Formal Education',
          items: [
            'Pokhara University - Software Engineering',
            'UI/UX Design Certification',
            'Web Development',
          ]
        },
        {
          category: 'Certifications',
          items: [
            'Google UX Design Certificate',
            'AI for All Certification',
            'Project Management Course',
            'Html/CSS/JS Certification'
          ]
        }
      ]
    },
    tools: {
      content: [
        {
          category: 'Design Tools',
          items: [
            'Adobe XD',
            'Figma',
            'Photoshop',
            'Illustrator',
            'Sketch',
            'InVision'
          ]
        },
        {
          category: 'Development Tools',
          items: [
            'VS Code',
            'Git & GitHub',
            'Terminal',
            'HTML/CSS/JS',
            'AI',
            'Microsoft Office'

          ]
        }
      ]
    }
  };

  return (
    <>
      <section id="about" className="py-10 bg-gradient-to-r from-blue-200 via-pink-300 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <motion.div 
          className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-center items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div 
              className="relative border h-full w-full md:h-[400px] lg:h-[700px] md:w-[300px] lg:w-[500px] flex justify-center items-center rounded-xl"
              variants={fadeIn('right')}
            >
              <img
                src='/Images/Sudipkc.webp'
                alt="Sudip KC"
                className="relative rounded-xl border shadow-2xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="md:space-y-0 h-full relative"
              variants={fadeIn('left')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Lottie animationData={animationData} className="w-24 h-24 absolute top-[30px] left-[-80px] z-10 transform -rotate-90" />

              <AnimatedText
                text="About Me"
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              />

              <motion.p 
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-justify"
                variants={fadeIn('up', 0.2)}
              >
                Hello, my name is Sudip KC, and I am from Nepal. I am currently pursuing a degree
                in Software Engineering, where I am honing my skills in various aspects of software
                development. Alongside my studies, I specialize in UI/UX Design and have experience
                in frontend development, combining creativity with technical expertise to create
                engaging and user-friendly interfaces.
              </motion.p>

              <motion.div 
                className="space-y-4 md:space-y-6"
                variants={fadeIn('up', 0.3)}
              >
                <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
                  {Object.keys(tabs).map((tab) => (
                    <TabButton
                      key={tab}
                      active={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabButton>
                  ))}
                </div>

                <motion.div 
                  className="min-h-[200px] md:min-h-[300px] bg-purple-200 dark:bg-gray-900 rounded-xl p-4 md:p-6"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <SkillsList skills={tabs[activeTab as keyof typeof tabs].content} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <AnimatedMarquee />
    </>
  );
}
