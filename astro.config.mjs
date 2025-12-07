// @ts-check
import { defineConfig } from 'astro/config';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default defineConfig({
  site: 'https://syanam.pro',
  output: 'static',
  trailingSlash: 'ignore',

  // Build options
  build: {
    format: 'directory',
  },

  // Vite configuration
  vite: {
    define: {
      'import.meta.env.VERCEL_ENV': JSON.stringify(process.env.VERCEL_ENV),
    },
  },

  // Integrations will go here when needed
  integrations: [],
});
