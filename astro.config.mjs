import { defineConfig } from 'astro/config';

// If you deploy to a subpath (e.g. GitHub Pages project site), set `base` and `site`.
// For a root-domain deploy (Netlify, custom domain), leave `base` as '/'.
export default defineConfig({
  site: 'https://salzmann.judaicadh.penn.org',
  base: '/',
  // Honor a PORT assigned by the harness (autoPort) so the dev server avoids
  // colliding with other local servers; falls back to Astro's default otherwise.
  server: { port: Number(process.env.PORT) || 4321 },
  build: {
    format: 'directory',
  },
});
