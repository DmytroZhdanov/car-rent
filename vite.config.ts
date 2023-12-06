import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

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
      App: "/src/App.tsx",
    },
  },
});
