import { Suspense, useEffect, useMemo } from 'react';
import { Helmet, HelmetProvider } from '@vuer-ai/react-helmet-async';
import { SimpleComponent, SimpleProvider } from '@vuer-ai/vuer';

export default function Page() {
  const isSSR = typeof window === 'undefined';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Vuer | Stereo Video and WebRTC Demo</title>
      </Helmet>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <SimpleProvider>
            <SimpleComponent />
          </SimpleProvider>
          {/*{isSSR ? null : (*/}
          {/*)}*/}
        </Suspense>
      </main>
    </HelmetProvider>
  );
}
