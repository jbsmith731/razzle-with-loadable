import React from 'react';
import { Link, Router } from '@reach/router';
import loadable from '@loadable/component';
import routes from './routes';

const NotFound = loadable(() => import("./NotFound"));

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Router>
      <NotFound default />
      {routes.map(({ exact, path, component: Component }) => (
        <Component key={path} path={path} exact={exact} />
      ))}
    </Router>
  </div>
);

export default App;
