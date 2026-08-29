import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Static output on Cloudflare Pages — specs/architecture.md
export default defineConfig({
  site: 'https://marketio.net',
  integrations: [tailwind(), sitemap()],
});
