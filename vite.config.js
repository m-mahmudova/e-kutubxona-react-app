import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/e-kutubxona-react-app/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
