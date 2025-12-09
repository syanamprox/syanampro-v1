import type { APIRoute } from 'astro';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'syanampro123456';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { password } = await request.json();

    // Simple password comparison
    const isValid = password === ADMIN_PASSWORD;

    if (isValid) {
      return new Response(JSON.stringify({
        success: true,
        message: 'Login successful'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid password'
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Server error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
};