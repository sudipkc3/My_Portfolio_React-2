declare module 'remarkable';

import { Remarkable } from 'remarkable';

interface BlogContentProps {
  content: string;
}

const md = new Remarkable({
  html: true,
});

// Remove the custom renderer rule for links
// md.renderer.rules.link_open = (tokens: any, idx: any) => {
//   const hrefAttr = tokens[idx]?.attrs?.find((attr: any) => attr[0] === 'href');
//   const href = hrefAttr ? hrefAttr[1] : '#';
//   return `<a href="${href}" target="_blank" rel="noopener noreferrer">`;
// };

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </article>
  );
}