import { ConfigEnv, defineConfig, UserConfig, ViteDevServer } from 'vite';
import mdx from '@mdx-js/rollup';
import vike from 'vike/plugin';
import react from '@vitejs/plugin-react-swc';
// @ts-ignore: types unavailable.
import { cjsInterop } from 'vite-plugin-cjs-interop';
import * as path from 'node:path';
import { pluginWatchNodeModules } from './plugins';

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
        dependencies: [],
      }),
      pluginWatchNodeModules(['@vuer-ai/vuer']),
    ],
    resolve: {
      preserveSymlinks: true,
      alias: {
        // '@vuer-ai/vuer': path.resolve(__dirname, './node_modules/@vuer-ai/vuer/src/index.tsx'),
      },
    },
    build: {
      minify: false,
      sourcemap: true,
      rollupOptions: {
        external: [],
        output: {
          /** this is to make sure css modules are included as part of a
           * single javascript file. */
          manualChunks: undefined,
        },
      },
    },
  } as UserConfig;

  if (!!process.env.DEVELOP) {
    console.log('dev mode is ON, hot reloading');
    config.resolve.alias['@vuer-ai/vuer'] = path.resolve(__dirname, './node_modules/@vuer-ai/vuer/src/index.tsx');
  } else {
    console.info("dev model is OFF. Hot reloading disabled. To enable, set env.DEVELOP to truthy value.")
  }

  return config;
};

export default defineConfig(configFn);
