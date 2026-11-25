
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode, isSsrBuild }) => ({
  base: "/",
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks(id) {
              if (!id.includes("node_modules")) return undefined;
              if (id.includes("react-dom") || id.includes("react-router-dom")) {
                return "vendor-react";
              }
              if (id.includes("framer-motion")) {
                return "vendor-motion";
              }
              if (id.includes("lucide-react")) {
                return "vendor-icons";
              }
              return undefined;
            },
          },
        },
  },
  server: {
    port: 8080,
  },
}));
