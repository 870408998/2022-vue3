import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://152.136.185.210:5000/",
  //       changeOrigin: true,
  //     },
  //   },
  // },

  server: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
