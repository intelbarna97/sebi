import { defineConfig } from 'astro/config';

// GitHub Pages serves the repo under /sebi/. Set BASE=/ when a custom domain (sebikft.hu) is used.
export default defineConfig({
  site: process.env.SITE ?? 'https://intelbarna97.github.io',
  base: process.env.BASE ?? '/sebi',
  trailingSlash: 'ignore',
});
