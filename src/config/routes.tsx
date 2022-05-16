import { RouteRecordRaw } from 'vue-router';
import { Welcome } from '../pages/Welcome';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {
        path: '1',
        redirect: '/welcome/1',
      },
    ],
  },
];
