import loadable from '@loadable/component'

const About = loadable(() => import('./About'));
const Home = loadable(() => import('./Home'));

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
];

export default routes;
