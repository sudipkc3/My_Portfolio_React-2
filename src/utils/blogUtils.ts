import matter from 'gray-matter';

export async function getBlogPost(slug: string) {
  try {
    const response = await fetch(`/src/data/blogs/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${slug}`);
    }
    const text = await response.text();
    const { data: frontmatter, content } = matter(text);
    return { frontmatter, content };
  } catch (error) {
    console.error(`Error fetching blog post: ${slug}`, error);
    return null;
  }
}