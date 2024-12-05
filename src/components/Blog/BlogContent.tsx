import Markdown from 'markdown-to-jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface BlogContentProps {
  content: string;
}

const CustomH1 = ({ children, ...props }: any) => (
  <motion.h1 
    className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
    variants={fadeIn('up')}
    {...props}
  >
    {children}
  </motion.h1>
);

const CustomH2 = ({ children, ...props }: any) => (
  <motion.h2 
    className="text-3xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100"
    variants={fadeIn('up')}
    {...props}
  >
    {children}
  </motion.h2>
);

const CustomH3 = ({ children, ...props }: any) => (
  <motion.h3 
    className="text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-100"
    variants={fadeIn('up')}
    {...props}
  >
    {children}
  </motion.h3>
);

const CustomP = ({ children, ...props }: any) => (
  <motion.p 
    className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
    variants={fadeIn('up')}
    {...props}
  >
    {children}
  </motion.p>
);

const CustomCode = ({ children, ...props }: any) => (
  <code 
    className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-pink-600 dark:text-pink-400 text-sm"
    {...props}
  >
    {children}
  </code>
);

const CustomPre = ({ children, ...props }: any) => (
  <pre 
    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6"
    {...props}
  >
    {children}
  </pre>
);

const CustomUl = ({ children, ...props }: any) => (
  <motion.ul 
    className="list-disc list-inside mb-4 space-y-2 text-gray-600 dark:text-gray-400"
    variants={fadeIn('up')}
    {...props}
  >
    {children}
  </motion.ul>
);

const CustomOl = ({ children, ...props }: any) => (
  <motion.ol 
    className="list-decimal list-inside mb-4 space-y-2 text-gray-600 dark:text-gray-400"
    variants={fadeIn('up')}
    {...props}
  >
    {children}
  </motion.ol>
);

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <Markdown
        options={{
          overrides: {
            h1: CustomH1,
            h2: CustomH2,
            h3: CustomH3,
            p: CustomP,
            code: CustomCode,
            pre: CustomPre,
            ul: CustomUl,
            ol: CustomOl,
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}