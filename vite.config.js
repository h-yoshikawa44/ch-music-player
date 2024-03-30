import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ch-music-player/' : './',
  server: {
    open: true,
  },
});
