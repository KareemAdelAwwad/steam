import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@components-global": path.resolve(__dirname, "./src/components/global"),
      "@components-community": path.resolve(__dirname, "./src/components/community"),
      "@components-library": path.resolve(__dirname, "./src/components/library"),
      "@components-settings": path.resolve(__dirname, "./src/components/settings"),
      "@components-store": path.resolve(__dirname, "./src/components/store"),
      "@utils": path.resolve(__dirname, "./src/utilities"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@json": path.resolve(__dirname, "./src/JSON"),
      "@games": path.resolve(__dirname, "./public/assets/Games"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
