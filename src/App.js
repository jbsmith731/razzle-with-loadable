import React from 'react';
import { Link, Switch } from 'react-router-dom';
import loadable from '@loadable/component'
// import Home from './Home';
// import Test from './Test';

const Test = loadable(() => import('./Test'));
const Home = loadable(() => import('./Home'));

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
    <Switch>
      <Home exact path="/" />
      <Test path="/test" />
    </Switch>
  </div>
);

export default App;
