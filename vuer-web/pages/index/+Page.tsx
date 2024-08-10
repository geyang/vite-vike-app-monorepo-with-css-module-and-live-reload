import React, { Suspense, useEffect, useMemo } from 'react';
import {Helmet} from 'react-helmet-async/lib/index.js';
import { SimpleComponent } from '@vuer-ai/vuer';

export default function Page() {
  const isSSR = typeof window === 'undefined';

  return (
    <div>
      <Helmet>
        <title>Vuer | Stereo Video and WebRTC Demo</title>
      </Helmet>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          {/*{isSSR ? null : (*/}
          {/*<SimpleProvider>*/}
          <SimpleComponent />
          {/*</SimpleProvider>*/}
          {/*)}*/}
        </Suspense>
      </main>
    </div>
  );
}
