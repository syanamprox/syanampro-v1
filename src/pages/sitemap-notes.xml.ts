import type { APIRoute } from 'astro';
import { getAllNotes } from '../lib/notes';

export const prerender = false;

export const GET: APIRoute = async (context) => {
  // Remove trailing slash from siteUrl to avoid double slashes
  const siteUrl = context.site?.toString().replace(/\/$/, '') || 'https://syanam.pro';

  // Get all published notes for both languages
  const notesEn = await getAllNotes('en');
  const notesId = await getAllNotes('id');

  // Combine all unique slugs
  const allSlugs = Array.from(new Set([...notesEn.map(n => n.slug), ...notesId.map(n => n.slug)]));

  const urls = allSlugs.map((slug) => {
    const noteEn = notesEn.find(n => n.slug === slug);
    const noteId = notesId.find(n => n.slug === slug);

    // Get the latest date between English and Indonesian versions
    const latestDate = noteEn?.publishedDate || noteId?.publishedDate || new Date().toISOString().split('T')[0];

    return `
  <url>
    <loc>${siteUrl}/notes/${slug}</loc>
    <lastmod>${latestDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/notes/${slug}"/>
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/notes/${slug}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/notes/${slug}"/>
  </url>
  <url>
    <loc>${siteUrl}/id/notes/${slug}</loc>
    <lastmod>${latestDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/notes/${slug}"/>
    <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id/notes/${slug}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/notes/${slug}"/>
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
