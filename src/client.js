import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { loadableReady } from '@loadable/component'

loadableReady(() => {
  hydrate(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
})

if (module.hot) {
  module.hot.accept();
}
