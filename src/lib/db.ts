import { MongoClient, Db, Collection, ObjectId } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'syanampro-notes';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Global is used here to maintain a cached connection across hot reloads in development.
let cached = global.mongo as any;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      maxPoolSize: 10,
    };

    cached.promise = MongoClient.connect(MONGODB_URI, opts)
      .then((client) => {
        return {
          client,
          db: client.db(DB_NAME),
        };
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Note interface
export interface Note {
  _id?: ObjectId;
  title_en: string;
  title_id: string;
  slug: string;
  status: 'draft' | 'published';
  category: string;
  publishedDate: Date;
  summary_en?: string;
  summary_id?: string;
  content_en: string;
  content_id: string;
  tags: string[];
  headerImage?: string;
  seo?: {
    description?: string;
    keywords?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Collection helpers
export async function getNotesCollection(): Promise<Collection<Note>> {
  const { db } = await connectToDatabase();
  return db.collection('notes');
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove multiple hyphens
    .trim();
}

// Get unique slug
export async function getUniqueSlug(title: string, currentId?: string): Promise<string> {
  let slug = generateSlug(title);
  const collection = await getNotesCollection();

  // Check if slug exists
  const existing = await collection.findOne({
    slug,
    ...(currentId && { _id: { $ne: new ObjectId(currentId) } })
  });

  if (existing) {
    // Append random suffix if slug exists
    const suffix = Math.random().toString(36).substring(2, 8);
    slug = `${slug}-${suffix}`;
  }

  return slug;
}

// Get note by slug
export async function getNoteBySlug(slug: string): Promise<Note | null> {
  const collection = await getNotesCollection();
  return await collection.findOne({ slug, status: 'published' });
}

// Get note by slug with language-specific content
export async function getNoteBySlugWithLang(slug: string, lang: 'en' | 'id' = 'en'): Promise<Note | null> {
  const collection = await getNotesCollection();
  const note = await collection.findOne({ slug, status: 'published' });

  if (!note) return null;

  // Transform note to legacy format for backward compatibility
  return {
    ...note,
    title: lang === 'en' ? note.title_en : note.title_id,
    content: lang === 'en' ? note.content_en : note.content_id,
    summary: lang === 'en' ? note.summary_en : note.summary_id,
  };
}