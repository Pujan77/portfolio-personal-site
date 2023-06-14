import { About, Contact, Homepage } from '../pages';

export const routingItems = [
  {
    to: '/',
    title: 'Homepage',
    component: <Homepage />,
    exact: true,
  },
  {
    to: '/about',
    title: 'About',
    component: <About />,
    exact: false,
  },
  {
    to: '/contact',
    title: 'Contact',
    component: <Contact />,
    exact: false,
  },
];
