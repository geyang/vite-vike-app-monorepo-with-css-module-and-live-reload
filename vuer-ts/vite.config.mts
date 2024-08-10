import { UserConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
// @ts-ignore: types unavailable.
import { cjsInterop } from 'vite-plugin-cjs-interop';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import pkg from './package.json';

export default {
  plugins: [
    mdx(),
    react({
      devTarget: 'es2022',
      tsDecorators: true,
    }),
    // This is to include css modules as part of the build
    // https://stackoverflow.com/a/71304592/1560241
    cssInjectedByJsPlugin(),
    cjsInterop({
      // List of CJS dependencies that require interop
      dependencies: [
        // 'react-helmet-async',
      ],
    }),
    dts({ strictOutput: false }),
  ],
  root: 'src',
  build: {
    minify: false, // <-- this is the important part
    sourcemap: true,
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,
    // cssCodeSplit: true,
    lib: {
      name: 'vuer',
      entry: {
        index: path.resolve(__dirname, './src/index.tsx'),
      },
      formats: ['es', 'umd'],
      fileName: (format, name) => {
        if (format == 'es') return `${name}.mjs`;
        else return `${name}.${format}.js`;
      },
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        /** this is to make sure css modules are included as part of a
         * single javascript file. */
        manualChunks: undefined,
      },
    },
  },
  // optimizeDeps: {
  //   include: ['react-helmet-async'],
  // },
  resolve: {
    preserveSymlinks: true,
  },
} as UserConfig;
