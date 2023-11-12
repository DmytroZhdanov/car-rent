import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      localization: "/src/localization",
      pages: "/src/pages",
      styles: "/src/styles",
      utils: "/src/utils",
    },
  },
});
