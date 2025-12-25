// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import netlify from '@astrojs/netlify';

// Load environment variables
dotenv.config();

// Use localhost for development, production URL for build
const siteUrl = import.meta.env.PROD
  ? 'https://syanam.pro'
  : 'http://localhost:4321';

export default defineConfig({
  site: siteUrl,
  output: 'server',
  adapter: netlify(),
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    gfm: true,
  }
});