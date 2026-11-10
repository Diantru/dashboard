import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/<nombre_del_repositorio>/',
  plugins: [react()],
})
