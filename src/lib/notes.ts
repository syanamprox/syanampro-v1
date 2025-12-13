import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

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
        const { data } = matter(fileContents);

        // Transform based on language
        return {
          slug,
          title: lang === 'en' ? data.title_en || data.title : data.title_id || data.title,
          category: data.category || 'General',
          status: data.status || 'draft',
          publishedDate: data.publishedDate || new Date().toISOString().split('T')[0],
          summary: lang === 'en' ? (data.summary_en || data.summary || '') : (data.summary_id || data.summary || ''),
          tags: Array.isArray(data.tags) ? data.tags : [],
          headerImage: data.headerImage || '',
          content: lang === 'en' ? data.content_en || data.content || '' : data.content_id || data.content || '',
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
    const { data } = matter(fileContents);

    // Transform based on language
    return {
      slug,
      title: lang === 'en' ? data.title_en || data.title : data.title_id || data.title,
      category: data.category || 'General',
      status: data.status || 'draft',
      publishedDate: data.publishedDate || new Date().toISOString().split('T')[0],
      summary: lang === 'en' ? (data.summary_en || data.summary || '') : (data.summary_id || data.summary || ''),
      tags: Array.isArray(data.tags) ? data.tags : [],
      headerImage: data.headerImage || '',
      content: lang === 'en' ? data.content_en || data.content || '' : data.content_id || data.content || '',
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