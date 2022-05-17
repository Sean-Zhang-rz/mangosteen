import { RouteRecordRaw } from 'vue-router';
import { Welcome } from '../pages/Welcome';
import { WelcomeAction } from '../pages/Welcome/Action';
import { WelcomeRender } from '../pages/Welcome/Render';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {
        path: '',
        redirect: '/welcome/1',
      },
      {
        path: ':id',
        components: { main: WelcomeRender, footer: WelcomeAction },
      },
    ],
  },
];
