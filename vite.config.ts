import { vitePlugin } from "@remix-run/dev";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    babel({
      filter: new RegExp(/\.tsx?$/),
    }),
    tsconfigPaths(),
    vitePlugin(),
  ],
  build: {
    outDir: "build",
    copyPublicDir: false,
    minify: "terser",
  },
  publicDir: "./public",
});
