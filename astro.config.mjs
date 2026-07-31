import { defineConfig } from 'astro/config';

// If you deploy to a subpath (e.g. GitHub Pages project site), set `base` and `site`.
// For a root-domain deploy (Netlify, custom domain), leave `base` as '/'.
export default defineConfig({
  site: 'https://salzmann.judaicadh.penn.org',
  base: '/',
  build: {
    format: 'directory',
  },
});
