import { useState } from 'react';
import { motion } from 'framer-motion';
import TabButton from './TabButton';
import SkillsList from './SkillsList';
import { fadeIn, staggerContainer } from '../../utils/animations';
import AnimatedText from '../shared/AnimatedText';

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <motion.div 
        className="container mx-auto px-6 flex justify-center items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative border h-[800px] w-full md:w-[500px] flex justify-center items-center rounded-xl"
            variants={fadeIn('right')}
          >
            <img
              src='./src/Images/ME.jpg'
              alt="Sudip KC"
              className="relative rounded-xl border shadow-2xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div 
            className="space-y-8 h-full"
            variants={fadeIn('left')}
            >
            <AnimatedText
              text="About Me"
              className="text-4xl font-bold text-gray-900 dark:text-white"
            />
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400"
              variants={fadeIn('up', 0.2)}
            >
              Hello, my name is Sudip KC, and I am from Nepal. I am currently pursuing a degree
              in Software Engineering, where I am honing my skills in various aspects of software
              development. Alongside my studies, I specialize in UI/UX Design and have experience
              in frontend development, combining creativity with technical expertise to create
              engaging and user-friendly interfaces.
            </motion.p>

            <motion.div 
              className="space-y-6"
              variants={fadeIn('up', 0.3)}
            >
              <div className="flex flex-wrap gap-4">
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
                className="min-h-[400px] bg-gray-100 dark:bg-gray-900 rounded-xl p-6"
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
  );
}