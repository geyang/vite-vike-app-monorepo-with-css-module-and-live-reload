# React Typescript Example with Server-Side Rendering in Streaming Mode

This is a full-fledged example of a React application with server-side rendering
in streaming mode using [`vike`](https://vike.dev/). The original code was
lifted from the [vike react-full example](https://github.com/vikejs/vike/tree/main/examples/react-full)

The pages include `mdx`, data loading, and examples of using css modules for styling.
Component hot reloading should be very fast.

**Caveats:** CSS-in-js frameworks, such as styled-components and emotion are not 
supported in build. This is because these upstream libraries currently
do not support the new streaming mode of React.

They might work in development mode, but not in the build. It is recommended to 
use CSS modules for styling before these libraries have been updated a couple of
years down the line.

Features:
 - Client Routing (+ usage of `navigate()`)
 - Data Fetching (server-side fetching + isomorphic fetching)
 - Pre-rendering (+ usage of the `onBeforePrerenderStart()` hook)
 - Route Function
 - TypeScript
 - Markdown
 - [`+client.js`](https://vike.dev/client)
 - Error Page
 - Active Links
 - Access `pageContext` from any React component (using React Context)
 - HTML streaming
 - Page Transition Loading Animation

```shell
git clone https://github.com/geyang/vike-react-typescript-css-module.git
cd vike-react-typescript-css-module
yarn
yarn dev
```

To build:
```shell
yarn build
```

You can preview the build via 
```shell
yarn preview
```
