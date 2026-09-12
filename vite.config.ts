import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative base so the built asset URLs work whether the site is served
  // from a domain root (Vercel/Netlify) or a GitHub Pages project subpath
  // like https://<user>.github.io/hackerbyte-brutalism-showcase/.
  base: './',
})
