// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Defina PUBLIC_SITE_URL no ambiente de produção (ver .env.example).
const site = process.env.PUBLIC_SITE_URL || 'https://ronrom.example';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  image: { layout: 'constrained' },
});
