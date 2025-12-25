import type { APIRoute } from 'astro';
import { getNotesPaginated } from '../../lib/notes';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const searchParams = new URL(url).searchParams;

    const lang = (searchParams.get('lang') || 'en') as 'en' | 'id';
    const offset = parseInt(searchParams.get('offset') || '0', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const category = searchParams.get('category') || undefined;
    const search = searchParams.get('search') || undefined;

    // Validate parameters
    if (!['en', 'id'].includes(lang)) {
      return new Response(
        JSON.stringify({ error: 'Invalid language parameter' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (offset < 0 || limit < 1 || limit > 100) {
      return new Response(
        JSON.stringify({ error: 'Invalid pagination parameters' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await getNotesPaginated({
      lang,
      offset,
      limit,
      category,
      search
    });

    return new Response(
      JSON.stringify(result),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60, stale-while-revalidate=300'
        }
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
