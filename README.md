# Live Reload During Package Development

## Setup

```shell
yarn
```

Adding the symbolic link
```shell
rm -rf vuer-web/node_modules/@vuer-ai/vuer
mkdir -p vuer-web/node_modules/@vuer-ai/vuer
ln -s $(realpath vuer-ts/src) vuer-web/node_modules/@vuer-ai/vuer/src
# the dist have to be a copied folder. It can not be a symbolic link
cp -r $(realpath vuer-ts/dist) vuer-web/node_modules/@vuer-ai/vuer/dist
ln -s $(realpath vuer-ts/package.json) vuer-web/node_modules/@vuer-ai/vuer/package.json
```

## Build

```
cd vuer-ts
yarn build
cd ../vuer-web
yarn preview
```

## Develop

```shell
cd vuer-web
yarn dev
```

## Notes

We override the `resolve.alias` in the web app's vite config, 
   to point `@vuer-ai/vuer-dev` directly to the non-symlinked
   relative path. The symlink via `yarn link` that resides inside
   the `./node_modules` won't trigger hot module reload.

We also configure the package to inject css module by javascript.
There is a delay on the client side, potentially due to the async
nature of the injection, but it is okay for now. Bundling the css
together also requires manual override to the chuncks, by setting
`build.rollout.manualChunkcs` to `undefined` according to this
stacoverflow post: [Two steps to include css module in js 
bundle](https://stackoverflow.com/a/71304592/1560241)

## Copyright

Built with :heart: by Ge Yang @ MIT CSAIL.
