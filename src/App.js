import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import loadable from '@loadable/component'

const Test = loadable( /* webpackChunkName: "test" */ () => import('./Test'));
const Home = loadable(/* webpackChunkName: "home" */() => import('./Home'));

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Switch>
  </div>
);

export default App;
