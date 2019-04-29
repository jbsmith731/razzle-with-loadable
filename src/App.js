import React from 'react';
import { Link, Router } from '@reach/router';
import loadable from '@loadable/component';
import routes from './routes';
import styled from 'styled-components';

const NotFound = loadable(() => import("./components/NotFound"));

const Wrap = styled.div`
  font-family: sans-serif;
`;

const App = () => (
  <Wrap>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Router>
      <NotFound default />
      {routes.map(({ exact, path, component: Component }) => (
        <Component key={path} path={path} />
      ))}
    </Router>
  </Wrap>
);

export default App;
