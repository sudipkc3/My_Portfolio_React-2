import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layout,FileCode, Presentation, } from 'lucide-react';
import ServiceBlock from './ServiceBlock';
import ServiceModal from './ServiceModal';
import SectionTitle from '../shared/SectionTitle';
import { staggerContainer } from '../../utils/animations';

interface ServiceDetails {
  title: string;
  description: string;
  details: {
    overview: string;
    features: string[];
    process: string[];
  };
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces that enhance user experience",
      color: "from-purple-500 to-pink-500",
      details: {
        overview: "Transform your digital presence with user-centered design solutions that combine aesthetics with functionality. I create intuitive interfaces that delight users and drive engagement.",
        features: [
          "User Research and Analysis",
          "Wireframing and Prototyping",
          "Visual Design and Branding",
          "Interaction Design",
          "Usability Testing",
          "Design System Creation"
        ],
        process: [
          "Discovery and Research Phase",
          "User Journey Mapping",
          "Low and High-Fidelity Wireframes",
          "Interactive Prototypes",
          "Visual Design Implementation",
          "Testing and Iteration"
        ]
      }
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies",
      color: "from-blue-500 to-cyan-500",
      details: {
        overview: "Create powerful web applications using cutting-edge technologies and best practices. We deliver scalable, maintainable, and high-performance solutions tailored to your needs.",
        features: [
          "Custom Web Application Development",
          "Responsive Design Implementation",
          "Performance Optimization",
          "SEO-Friendly Architecture",
          "Security Best Practices",
          "API Integration"
        ],
        process: [
          "Requirements Analysis",
          "Architecture Planning",
          "Development Sprints",
          "Quality Assurance",
          "Deployment",
          "Maintenance and Support"
        ]
      }
    },
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Crafting pixel-perfect interfaces with attention to detail and performance",
      color: "from-green-500 to-emerald-500",
      details: {
        overview: "Bring your designs to life with clean, efficient, and maintainable frontend code. We focus on creating seamless user experiences across all devices and platforms.",
        features: [
          "Modern Framework Implementation",
          "Component-Based Architecture",
          "State Management",
          "Animation and Interactions",
          "Cross-Browser Compatibility",
          "Performance Optimization"
        ],
        process: [
          "Design Review and Planning",
          "Component Architecture",
          "Development and Testing",
          "Performance Optimization",
          "Browser Testing",
          "Documentation"
        ]
      }
    },
    {
      icon: FileCode,
      title: "Documentation Service",
      description: "Creating comprehensive and user-friendly documentation for your software projects",
      color: "from-indigo-500 to-purple-500",
      details: {
        overview: "Develop detailed and easy-to-understand documentation that helps users and developers alike. I ensure your documentation is clear, concise, and accessible.",
        features: [
          "User Manuals",
          "API Documentation",
          "Technical Guides",
          "Knowledge Base Articles",
          "Release Notes",
          "Training Materials"
        ],
        process: [
          "Information Gathering",
          "Content Planning",
          "Writing and Editing",
          "Review and Approval",
          "Publishing",
          "Maintenance and Updates"
        ]
      }
    },
    {
      icon: Presentation,
      title: "Microsoft 365 Services",
      description: "Providing comprehensive Microsoft 365 solutions for your business productivity needs",
      color: "from-pink-500 to-rose-500",
      details: {
        overview: "Unlock the full potential of Microsoft 365 to boost your business productivity and collaboration. Our solutions cover a wide range of essential tools to streamline your operations.",
        features: [
          "Microsoft Word for Document Creation",
          "Excel for Data Analysis and Reporting",
          "PowerPoint for Engaging Presentations",
          "Outlook for Email and Calendar Management",
          "OneNote for Efficient Note-Taking",
          "Teams for Seamless Communication and Collaboration",
          "SharePoint and OneDrive for File Storage and Sharing",
          "Security and Compliance Features"
        ],
        process: [
          "Requirement Analysis",
          "Customized Solution Planning",
          "Deployment and Configuration",
          "User Training and Onboarding",
          "Performance Monitoring and Support",
          "Regular Updates and Optimization"
        ]
      }
    }
  ];

  return (
    <section id="services" className="py-14 bg-gradient-to-r from-blue-200 via-pink-300 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <motion.div 
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle
          title="My Services"
          subtitle="Specialized solutions tailored to your needs"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceBlock
              key={service.title}
              {...service}
              index={index}
              onLearnMore={() => setSelectedService(service)}
            />
          ))}
        </div>

        {selectedService && (
          <ServiceModal
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService}
          />
        )}
      </motion.div>
    </section>
  );
}
