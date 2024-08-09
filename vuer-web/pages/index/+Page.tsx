import { Counter } from '../../components/Counter.js';

export default Page;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { className } from './index.module.scss';
import { SimpleComponent } from '@vuer-ai/vuer-dev';

function Page() {
  return (
    <>
      <Helmet>
        <title>Vuer (Technical Preview)</title>
      </Helmet>
      <div className={className}>
        Does this work.
        <Counter />
        <SimpleComponent />
      </div>
    </>
  );
}
