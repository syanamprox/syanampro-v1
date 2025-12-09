import { APIRoute } from 'astro';
import { getNotesCollection, getUniqueSlug } from '../../lib/db';

export const GET: APIRoute = async ({ url }) => {
  try {
    const collection = await getNotesCollection();
    const searchParams = new URL(url).searchParams;

    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const status = searchParams.get('status');

    // Build query
    const query: any = {};
    if (category && category !== 'all') {
      query.category = category;
    }
    if (status && status !== 'all') {
      query.status = status;
    }

    // Skip and limit for pagination
    const skip = (page - 1) * limit;

    // Get notes
    const notes = await collection
      .find(query)
      .sort({ publishedDate: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // Get total count
    const total = await collection.countDocuments(query);

    return new Response(JSON.stringify({
      docs: notes,
      totalDocs: total,
      totalPages: Math.ceil(total / limit),
      page,
      limit
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error fetching notes:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch notes'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      title_en,
      title_id,
      category,
      status,
      publishedDate,
      summary_en,
      summary_id,
      content_en,
      content_id,
      tags,
      headerImage
    } = data;

    // Validate required fields
    if (!title_en || !title_id || !category || !content_en || !content_id) {
      return new Response(JSON.stringify({
        error: 'English title, Indonesian title, category, English content, and Indonesian content are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get collection
    const collection = await getNotesCollection();

    // Generate unique slug (using English title)
    const slug = await getUniqueSlug(title_en);

    // Create new note
    const now = new Date();
    const newNote = {
      title_en,
      title_id,
      slug,
      status: status || 'draft',
      category,
      publishedDate: new Date(publishedDate || now),
      summary_en: summary_en || '',
      summary_id: summary_id || '',
      content_en,
      content_id,
      tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map((tag: string) => tag.trim()) : []),
      headerImage: headerImage || null,
      createdAt: now,
      updatedAt: now
    };

    const result = await collection.insertOne(newNote);

    return new Response(JSON.stringify({
      success: true,
      note: {
        ...newNote,
        _id: result.insertedId
      }
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error creating note:', error);
    return new Response(JSON.stringify({ error: 'Failed to create note' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};