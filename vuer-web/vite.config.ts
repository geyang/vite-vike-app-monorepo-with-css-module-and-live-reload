import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import vike from 'vike/plugin';
import react from '@vitejs/plugin-react-swc';
// @ts-ignore: types unavailable.
import { cjsInterop } from 'vite-plugin-cjs-interop';
import path from 'node:path';

export const configFn = ({ command }: ConfigEnv) => {
  console.log('command', command);

  const config: UserConfig = {
    plugins: [
      vike({
        prerender: true,
      }),
      mdx(),
      react({
        devTarget: 'es2022',
        tsDecorators: true,
      }),
      cjsInterop({
        // List of CJS dependencies that require interop
        dependencies: [
          // 'react-helmet-async',
          // 'react-helmet-async/**',
          // 'react-helmet-async/lib/index.esm.js',
          'react-helmet-async/lib/index.js'
        ],
      }),
    ],
    resolve: {
      preserveSymlinks: true,
      alias: {
        // '@': path.resolve(__dirname, './src'),
        // 'react-helmet-async/*': path.resolve(__dirname, './node_modules/react-helmet-async/lib/index.js'),
        // '*/react-helmet-async/*': path.resolve(__dirname, './node_modules/react-helmet-async/lib/index.js'),
      },
    },
    // ssr: {
    //   noExternal: [
    //     'react-helmet-async',
    //     'react-helmet-async/**'
    //   ],
    //   // target: 'node',
    //   // optimizeDeps: {
    //   //   include: [
    //   //     'cross-fetch',
    //   //     'react/jsx-runtime',
    //   //     'react-helmet-async',
    //   //   ],
    //   // },
    // },
    build: {
      rollupOptions: {
        external: [
          // 'react',
          // 'react-dom',
          // 'react/jsx-runtime',
          // 'react-helmet-async',
          // 'react-helmet-async/*',
          // 'react-helmet-async/**/*',
          // path.resolve(__dirname, 'vite.config.ts'),
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    optimizeDeps: {
      needsInterop: [
        // '@vuer-ai/vuer',
        // 'react-helmet-async/lib/index.js',
        // 'react/jsx-runtime',
      ],
      include: [
        // 'cross-fetch',
        // 'react-helmet-async',
        'react-helmet-async/lib/index.js',
        // "react/jsx-runtime",
      ],
    },
  } as UserConfig;
  if (command === 'serve') {
    config.resolve.alias = {
      // if we use node_module/@vuer-ai/vuer-dev, HMR will not work.
      // so we use the path to the source code instead.
      // To avoid this alias during build (on Netlify), we can condition this
      // on dev mode.
      // '@vuer-ai/vuer': path.resolve(__dirname, '../vuer-ts/src/index.tsx'),
      // 'react-helmet-async': path.resolve(__dirname, './node_modules/react-helmet-async'),
      // 'react-helmet-async/*': path.resolve(__dirname, './node_modules/react-helmet-async/*'),
      // 'react/*': path.resolve(__dirname, './node_modules/react/*'),
      // 'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      // 'react/*': path.resolve(__dirname, './node_modules/react/*'),
      // 'use-state-ref/*': path.resolve(__dirname, './node_modules/use-react-ref/*'),
      // '@vuer-ai/vuer/*': path.resolve(__dirname, '../vuer-ts/*'),
      // '@vuer-ai/mujoco-ts/*': path.resolve(__dirname, '../mujoco-ts/*'),
      // 'react-reconciler/*': path.resolve(__dirname, './node_modules/react-reconciler/*'),
      // '/node_modules/@vuer-ai/vuer/node_modules/react-reconciler/*': path.resolve(__dirname, './node_modules/react-reconciler/*'),
    };
  }
  return config;
};

export default defineConfig(configFn);
