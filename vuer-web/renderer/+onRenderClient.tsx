// https://vike.dev/onRenderClient
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Layout';
import { getPageTitle } from './getPageTitle';
import type { OnRenderClientAsync } from 'vike/types';

import { HelmetProvider } from '@vuer-ai/react-helmet-async';

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
