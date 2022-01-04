/* eslint-env node */

const PACKAGE_ROOT = __dirname;

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  build: {
    assetsInlineLimit: 0,
    sourcemap: "inline",
    target: `node16`,
    outDir: "dist",
    assetsDir: ".",
    minify: false,
    lib: {
      entry: "./main.js",
      formats: ["cjs"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].cjs",
      },
    },
    emptyOutDir: true,
    brotliSize: false,
  },
};

export default config;
