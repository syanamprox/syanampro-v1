// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import netlify from '@astrojs/netlify';

// Load environment variables
dotenv.config();

export default defineConfig({
  site: 'https://syanam.pro',
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