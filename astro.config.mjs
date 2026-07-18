import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bryansanchez101.github.io',
  base: '/personal-portfolio',
  integrations: [mdx(), tailwind()]
});
