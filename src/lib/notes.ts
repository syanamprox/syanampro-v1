import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Configure marked to add IDs to headings
const renderer = new marked.Renderer();
const originalHeadingRenderer = renderer.heading.bind(renderer);

renderer.heading = function(text: any, level: number | string, raw?: string) {
  // The text parameter might be a token object, extract the actual text
  let textStr: string;

  if (typeof text === 'string') {
    textStr = text;
  } else if (raw) {
    textStr = raw;
  } else if (text && text.text) {
    textStr = text.text;
  } else {
    textStr = String(text);
  }

  // Convert level to number if it's a string
  const levelNum = typeof level === 'string' ? parseInt(level, 10) : level;

  // Default to h2 if level is undefined or invalid
  const finalLevel = (levelNum && levelNum >= 1 && levelNum <= 6) ? levelNum : 2;

  // Generate slug from text
  const slug = textStr
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();

  // Return heading with ID
  return `<h${finalLevel} id="${slug}">${textStr}</h${finalLevel}>`;
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

export interface Note {
  slug: string;
  title_en: string;
  title_id: string;
  category: string;
  status: 'draft' | 'published';
  publishedDate: string;
  summary_en?: string;
  summary_id?: string;
  tags: string[];
  headerImage?: string;
  content_en: string;
  content_id: string;
}

export async function getAllNotes(lang: 'en' | 'id' = 'en'): Promise<Array<Omit<Note, 'content_' | 'summary_' | 'title_'> & {
  title: string;
  summary: string;
  content: string;
}>> {
  try {
    const notesDirectory = path.join(process.cwd(), 'src/content/notes');
    const filenames = await fs.readdir(notesDirectory);

    const notes = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, '');
        const fullPath = path.join(notesDirectory, filename);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // For now, use the same content for both languages
        // TODO: Implement proper multi-language support
        const rawContent = content;

        return {
          slug,
          title: lang === 'en' ? data.title_en || data.title : data.title_id || data.title,
          category: data.category || 'General',
          status: data.status || 'draft',
          publishedDate: data.publishedDate || new Date().toISOString().split('T')[0],
          summary: lang === 'en' ? (data.summary_en || data.summary || '') : (data.summary_id || data.summary || ''),
          tags: Array.isArray(data.tags) ? data.tags : [],
          headerImage: data.headerImage || '',
          content: marked(rawContent),
          // Keep original fields for reference
          title_en: data.title_en || data.title || '',
          title_id: data.title_id || data.title || '',
          summary_en: data.summary_en || data.summary || '',
          summary_id: data.summary_id || data.summary || '',
          content_en: data.content_en || data.content || '',
          content_id: data.content_id || data.content || '',
        };
      });

    // Resolve all promises and filter only published notes
    const resolvedNotes = await Promise.all(notes);
    return resolvedNotes
      .filter(note => note.status === 'published')
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

  } catch (error) {
    console.error('Error reading notes:', error);
    return [];
  }
}

export async function getNoteBySlug(slug: string, lang: 'en' | 'id' = 'en'): Promise<Omit<Note, 'content_' | 'summary_' | 'title_'> & {
  title: string;
  summary: string;
  content: string;
} | null> {
  try {
    const fullPath = path.join(process.cwd(), 'src/content/notes', `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // For now, use the same content for both languages
    // TODO: Implement proper multi-language support
    const rawContent = content;

    return {
      slug,
      title: lang === 'en' ? data.title_en || data.title : data.title_id || data.title,
      category: data.category || 'General',
      status: data.status || 'draft',
      publishedDate: data.publishedDate || new Date().toISOString().split('T')[0],
      summary: lang === 'en' ? (data.summary_en || data.summary || '') : (data.summary_id || data.summary || ''),
      tags: Array.isArray(data.tags) ? data.tags : [],
      headerImage: data.headerImage || '',
      content: marked(rawContent),
      // Keep original fields for reference
      title_en: data.title_en || data.title || '',
      title_id: data.title_id || data.title || '',
      summary_en: data.summary_en || data.summary || '',
      summary_id: data.summary_id || data.summary || '',
      content_en: data.content_en || data.content || '',
      content_id: data.content_id || data.content || '',
    };
  } catch (error) {
    console.error(`Error reading note ${slug}:`, error);
    return null;
  }
}

export async function getCategories(lang: 'en' | 'id' = 'en'): Promise<string[]> {
  try {
    const notes = await getAllNotes(lang);
    const categories = Array.from(new Set(notes.map(note => note.category)));
    return categories.sort();
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
}