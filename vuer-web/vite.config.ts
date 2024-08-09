import path from 'node:path';
import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import vike from 'vike/plugin';
import react from '@vitejs/plugin-react-swc';
import { cjsInterop } from 'vite-plugin-cjs-interop';

export const configFn = ({ command }: ConfigEnv) => {
  console.log("command", command)

  const config: UserConfig = {
    envDir: '../',
    plugins: [
      vike({
        prerender: true,
      }),
      mdx(),
      react({
        // jsxImportSource: '@emotion/react',
        devTarget: 'es2022',
        tsDecorators: true,
        // plugins: [['@swc/plugin-emotion', {}]],
      }),
      cjsInterop({
        // List of CJS dependencies that require interop
        dependencies: [
          'react-helmet-async',
        ],
      }),
    ],
    resolve: {
      preserveSymlinks: true,
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          // 'three': 'THREE',
        },
      },
    },
  } as UserConfig;
  if (command === 'serve') {
    config.resolve.alias = {
      // if we use node_module/@vuer-ai/vuer-dev, HMR will not work.
      // so we use the path to the source code instead.
      // To avoid this alias during build (on Netlify), we can condition this
      // on dev mode.
      '@vuer-ai/vuer-dev': path.resolve(__dirname, '../vuer-ts/src/index.tsx'),
      // '@vuer-ai/vuer/*': path.resolve(__dirname, '../vuer-ts/*'),
      // '@vuer-ai/mujoco-ts/*': path.resolve(__dirname, '../mujoco-ts/*'),
      // 'react-reconciler/*': path.resolve(__dirname, './node_modules/react-reconciler/*'),
      // '/node_modules/@vuer-ai/vuer/node_modules/react-reconciler/*': path.resolve(__dirname, './node_modules/react-reconciler/*'),
    };
  }
  return config;
};

export default defineConfig(configFn);
