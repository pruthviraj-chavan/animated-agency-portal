import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./", // Ensure correct asset loading on Vercel
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        services: path.resolve(__dirname, "services.html"),
        customWebsiteDevelopment: path.resolve(__dirname, "custom-website-development.html"),
        // Add other sub-pages here
      },
    },
  },
});
