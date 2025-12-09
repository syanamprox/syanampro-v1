export interface Note {
  _id?: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  category: string;
  publishedDate: string;
  summary?: string;
  content: string;
  tags: string[];
  seo?: {
    description?: string;
    keywords?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface NotesResponse {
  docs: Note[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
}

export async function getNotes(page: number = 1, limit: number = 10): Promise<NotesResponse> {
  try {
    // Determine if we're on server or client
    const baseUrl = typeof window === 'undefined'
      ? 'http://localhost:4321' // Server-side default
      : ''; // Client-side relative path

    const response = await fetch(
      `${baseUrl}/api/notes?page=${page}&limit=${limit}&status=published`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch notes: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching notes:', error);
    return {
      docs: [],
      totalDocs: 0,
      totalPages: 0,
      page,
      limit
    };
  }
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  try {
    const response = await fetch(`/api/notes/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch note: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching note:', error);
    return null;
  }
}

export async function getNotesByCategory(category: string, page: number = 1, limit: number = 10): Promise<NotesResponse> {
  try {
    const response = await fetch(
      `/api/notes?page=${page}&limit=${limit}&category=${category}&status=published`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch notes by category: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching notes by category:', error);
    return {
      docs: [],
      totalDocs: 0,
      totalPages: 0,
      page,
      limit
    };
  }
}