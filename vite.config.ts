
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";

// Run the SVG to PNG conversion before the build starts
try {
  if (process.env.NODE_ENV !== 'development') {
    console.log("Converting SVG to PNG...");
    execSync("node ./scripts/convert-svg-to-png.js");
    console.log("SVG to PNG conversion completed");
  }
} catch (error) {
  console.error("Error converting SVG to PNG:", error);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Make process.env available in the browser
    "process.env": {}
  }
}));
