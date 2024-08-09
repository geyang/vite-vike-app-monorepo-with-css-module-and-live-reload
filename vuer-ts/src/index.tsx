import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { listName } from './index.module.scss';

export function SimpleComponent() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Vuer Override</title>
      </Helmet>
      <div className={listName}>
        This can be updated at real time.
      </div>
    </HelmetProvider>
  );
}
