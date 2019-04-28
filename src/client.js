import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { loadableReady } from '@loadable/component';

loadableReady(() => {
  hydrate(
    <App />,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}
