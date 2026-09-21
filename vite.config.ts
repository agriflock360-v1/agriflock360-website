import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { renderSeoHead } from "./src/lib/seo.ts";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), {
    name: "page-seo",
    transformIndexHtml(html) {
      return html.replace("<!--seo-head-->", `<!--seo-head-start-->\n    ${renderSeoHead("/")}\n    <!--seo-head-end-->`);
    },
  }],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (id.includes("@huggingface/transformers") || id.includes("onnxruntime-web")) {
            return "ai-background-removal";
          }

          if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
            return "react-vendor";
          }

          if (id.includes("@radix-ui") || id.includes("lucide-react")) {
            return "ui-vendor";
          }

          return "vendor";
        },
      },
    },
  },
}));
