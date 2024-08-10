import { ViteDevServer } from 'vite';

export function pluginWatchNodeModules(modules) {
  // Merge module into pipe separated string for RegExp() below.
  let pattern = `/node_modules\\/(?!${modules.join('|')}).*/`;
  return {
    name: 'watch-node-modules',
    configureServer: (server: ViteDevServer) : void => {
      server.watcher.options = {
        ...server.watcher.options,
        ignored: [
          new RegExp(pattern),
          '**/.git/**',
        ]
      }
    }
  }
}