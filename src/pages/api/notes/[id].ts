import type { APIRoute } from 'astro';
import { getNotesCollection, getUniqueSlug } from '../../../lib/db';
import { ObjectId } from 'mongodb';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const collection = await getNotesCollection();
    const { id } = params;

    let note;

    // Check if id is a valid ObjectId or a slug
    if (ObjectId.isValid(id)) {
      note = await collection.findOne({ _id: new ObjectId(id) });
    } else {
      note = await collection.findOne({ slug: id, status: 'published' });
    }

    if (!note) {
      return new Response(JSON.stringify({
        error: 'Note not found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify(note), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error fetching note:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch note'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const collection = await getNotesCollection();
    const { id } = params;
    const updateData = await request.json();
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
    } = updateData;

    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({
        error: 'Invalid note ID'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validate required fields for dual-language
    if (!title_en || !title_id || !content_en || !content_id) {
      return new Response(JSON.stringify({
        error: 'English title, Indonesian title, English content, and Indonesian content are required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // If English title is being updated, generate new slug
    if (title_en) {
      updateData.slug = await getUniqueSlug(title_en, id);
    }

    // Prepare update object with dual-language fields
    const updateFields = {
      title_en,
      title_id,
      category,
      status,
      summary_en: summary_en || '',
      summary_id: summary_id || '',
      content_en,
      content_id,
      tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map((tag: string) => tag.trim()) : []),
      headerImage: headerImage || null,
      updatedAt: new Date(),
      publishedDate: publishedDate ? new Date(publishedDate) : undefined
    };

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({
        error: 'Note not found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      modifiedCount: result.modifiedCount
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error updating note:', error);
    return new Response(JSON.stringify({
      error: 'Failed to update note'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const collection = await getNotesCollection();
    const { id } = params;

    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({
        error: 'Invalid note ID'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({
        error: 'Note not found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      deletedCount: result.deletedCount
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error deleting note:', error);
    return new Response(JSON.stringify({
      error: 'Failed to delete note'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};