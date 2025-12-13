// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  site: 'https://syanam.pro',
  output: 'server', // Change to server to allow API routes
  trailingSlash: 'ignore',
  vite: {
    define: {
      'process.env.MONGODB_URI': JSON.stringify(process.env.MONGODB_URI),
      'process.env.ADMIN_PASSWORD': JSON.stringify(process.env.ADMIN_PASSWORD),
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    gfm: true,
  }
});