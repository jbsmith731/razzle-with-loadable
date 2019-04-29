import loadable from '@loadable/component'

const About = loadable(() => import('./components/About'));
const Home = loadable(() => import('./components/Home'));

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
