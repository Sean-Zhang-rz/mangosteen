import { RouteRecordRaw } from 'vue-router';
import { StartPage } from '../pages/StartPage/inedx';
import { Welcome } from '../pages/Welcome';
import { WelcomeAction } from '../pages/Welcome/Components/Action';
import { WelcomeRender } from '../pages/Welcome/Components/Render';

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
  {
    path: '/start',
    component: StartPage,
  },
];
