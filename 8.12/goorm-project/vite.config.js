// Vite가 '@'를 프로젝트의 'src' 폴더로 인식하도록 설정
import path from "path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@/...' => 'src/...' 로 매핑
    },
  },
})
