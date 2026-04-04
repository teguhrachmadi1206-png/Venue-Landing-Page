import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/teguhrachmadi1206-png/Venue-Landing-Page",
  plugins: [react()],
})
