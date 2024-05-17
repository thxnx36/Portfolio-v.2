import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./src",
  define: {
    "process.env.VITE_SERVICE_ID": JSON.stringify(process.env.VITE_SERVICE_ID),
    "process.env.VITE_TEMPLATE_ID": JSON.stringify(
      process.env.VITE_TEMPLATE_ID,
    ),
    "process.env.VITE_USER_ID": JSON.stringify(process.env.VITE_USER_ID),
    "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
