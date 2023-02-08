import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // set port 3030
  server: {
    port: 3030,
  },
  base: "/vite_ts_vue/",
});
