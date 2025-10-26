import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: '/', // Mude para '/nome-do-seu-repo/' se o site não aparecer corretamente
})
