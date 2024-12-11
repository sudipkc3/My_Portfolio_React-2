export interface Work {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const works: Work[] = [
  {
    id: 'landing-page',
    title: 'Cook it Yourself',
    description: 'The Recipe Sharing Website is a web-based platform where users can explore, share, and discover a wide variety of recipes. Users can add their own recipes, rate recipes shared by others, and bookmark their favorite ones. The website also includes an advanced search functionality, a recommendation system based on user preferences and ingredients, and nutritional value calculations for added recipes.',
    image: "/Work_Images/CIY Page.png",
    link: 'https://recipe-recommender-five.vercel.app/',
    tags: ['UI/UX', 'Figma', 'Design','React', 'Tailwind CSS', 'WebApp']
  },
  {
    id: 'Wireframe for Responsive Website',
    title: 'Wireframe for Responsive Website',
    description: "This wireframe outlines the design and layout for a responsive website tailored to the company's needs. It serves as a visual blueprint, showcasing the placement of key elements like navigation, content sections, and interactive features. The wireframe ensures a seamless user experience across various devices, emphasizing usability, accessibility, and alignment with the company's goals.",
    image: '/Work_Images/Wireframe.jpg',
    link: 'https://www.figma.com/design/4QQtllO9qaDFtZAArVcgoL/Wireframing-for-responsive-Website',
    tags: ['UI/UX', 'Figma', 'Wireframe']
  },
  {
    id: 'green-thread',
    title: 'Green Thread',
    description: 'An e-commerce platform for eco-friendly fashion with a vibrant and intuitive interface.',
    image: '/Work_Images/Shopping.png',
    link: "https://www.figma.com/design/mt9Kd9hTsL5nRlccJ6eX6D/GreenThread?node-id=103-183&t=G4j4UZtYJG5ja0QV-1",
    tags: ['Wireframe', 'E-commerce', 'UI/UX', 'Figma', 'Design', 'Responsive']
  },
  {
    id: 'crypto-trading',
    title: 'Crypto Trading',
    description: 'An iOS app crafted for cryptocurrency trading with a sleek and user-friendly interface.',
    image: '/Work_Images/Trading.png',
    link: 'https://www.figma.com/design/psqf0KtNhpW36KCy0KWvra/Untitled',
    tags: ['iOS', 'Crypto', 'Trading']
  },
  {
    id: 'Online Shopping App',
    title: 'Online Shopping App',
    description: 'Designed the complete UI for an e-commerce app, including wireframing, prototyping, and creating visually appealing, user-centric interfaces. Focused on delivering an intuitive shopping experience by optimizing navigation, enhancing usability, and aligning with modern design trends to meet user needs effectively.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: "#",
    tags: ['Wireframe', 'E-commerce', 'UI/UX', 'Figma', 'Design', 'Responsive']
  },
  {
    id: 'Quest Hub',
    title: 'Quest Hub',
    description: 'Join tournaments, team up in multiplayer groups, stream your gameplay, and explore reviews of your favorite video games—all in one place. QuestHub connects gamers worldwide for competition, collaboration, and community.',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: "https://www.figma.com/design/qEK2K1nOzNXAKalUmdoQ8E/Gaming-Community?node-id=0-1&t=cAKlJ5Q1sXRKr0G0-1",
    tags: ['Wireframe', 'E-commerce', 'UI/UX', 'Figma', 'Design', 'Responsive']
  },
  {
    id: 'Landing page for makeup',
    title: 'Landing page for makeup',
    description: 'Crafted in Figma, this landing page celebrates beauty and elegance, with a focus on user experience and sleek visuals that highlight the products our skin deserves! From bold call-to-actions to a polished, inviting layout, the goal is to make beauty accessible and appealing. Perfecting every pixel for a seamless shopping journey that feels as good as the products themselves!',
    image: 'https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: "https://www.figma.com/proto/fJfiA2IwYAu912jyZSmbwX/Practice?page-id=18%3A2&node-id=46-2&node-type=frame&viewport=694%2C195%2C0.31&t=ZPwnarNTK0BL8xgw-1&scaling=min-zoom&content-scaling=fixed",
    tags: ['Wireframe', 'E-commerce', 'UI/UX', 'Figma', 'Design', 'Responsive']
  },
];