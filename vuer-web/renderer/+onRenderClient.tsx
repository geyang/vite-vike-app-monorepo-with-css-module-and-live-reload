// https://vike.dev/onRenderClient

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Layout';
import { getPageTitle } from './getPageTitle';
import type { OnRenderClientAsync } from 'vike/types';

import { HelmetProvider } from 'react-helmet-async/lib/index.js';

// import * as helmet from 'react-helmet-async';
//
// const helmetDefault = helmet.default ?? helmet;
// const HelmetProvider = helmetDefault.HelmetProvider;

let root: ReactDOM.Root;
export const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page } = pageContext;
  const page = (
    <Layout pageContext={pageContext}>
      <HelmetProvider>
        <Page />
      </HelmetProvider>
    </Layout>
  );
  const container = document.getElementById('react-root')!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};
