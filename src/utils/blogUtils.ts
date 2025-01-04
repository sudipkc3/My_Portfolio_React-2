interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  excerpt: string;
  coverImage: string;
}

export async function getBlogPost(slug: string): Promise<{ frontmatter: BlogFrontmatter; content: string }> {
  try {
    const url = `/blogs/${slug}.md`;
    console.log('Attempting to fetch blog post from:', url);

    const response = await fetch(url, {
      headers: {
        'Accept': 'text/markdown, text/plain, */*'
      }
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      throw new Error(`Failed to load blog post: ${slug} (Status: ${response.status})`);
    }

    const text = await response.text();
    console.log('First 100 characters of response:', text.slice(0, 100));

    // Check if we received HTML
    if (text.toLowerCase().includes('<!doctype html>')) {
      console.log('Received HTML content instead of markdown');
      throw new Error(`Received HTML instead of markdown for blog post: ${slug}`);
    }

    // Validate markdown format
    if (!text.startsWith('---')) {
      console.log('Content does not start with frontmatter delimiter');
      throw new Error(`Invalid markdown format: File must start with frontmatter (---)`);
    }

    const parts = text.split('---');
    if (parts.length < 3) {
      console.log('Found parts:', parts.length);
      throw new Error(`Invalid markdown format: Missing proper frontmatter delimiters (---)`);
    }

    const frontmatterStr = parts[1].trim();
    if (!frontmatterStr) {
      throw new Error(`Missing frontmatter content`);
    }

    const content = parts.slice(2).join('---');
    const frontmatter = parseFrontmatter(frontmatterStr);

    return { 
      frontmatter, 
      content: content.trim() 
    };
  } catch (error) {
    console.error(`Error loading blog post (${slug}):`, error);
    throw error;
  }
}

function parseFrontmatter(frontmatterStr: string): BlogFrontmatter {
  try {
    const lines = frontmatterStr.trim().split('\n');
    const frontmatter: Record<string, string> = {};

    console.log('Parsing frontmatter lines:', lines);

    lines.forEach(line => {
      const [key, ...values] = line.split(':');
      if (key && values.length) {
        frontmatter[key.trim()] = values.join(':').trim();
      }
    });

    // Validate required fields
    const requiredFields: (keyof BlogFrontmatter)[] = [
      'title', 'date', 'author', 'readTime', 'category', 'excerpt', 'coverImage'
    ];

    const missingFields = requiredFields.filter(field => !frontmatter[field]);
    if (missingFields.length > 0) {
      throw new Error(`Missing required frontmatter fields: ${missingFields.join(', ')}`);
    }

    console.log('Parsed frontmatter:', frontmatter);

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      author: frontmatter.author,
      readTime: frontmatter.readTime,
      category: frontmatter.category,
      excerpt: frontmatter.excerpt,
      coverImage: frontmatter.coverImage
    };
  } catch (error) {
    console.error('Error parsing frontmatter:', error);
    throw error;
  }
}
