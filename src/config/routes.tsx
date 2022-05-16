import { RouteRecordRaw } from 'vue-router';
import { Bar } from '../pages/Bar';
import { Foo } from '../pages/Foo';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Foo },
  {
    path: '/welcome',
    component: Bar,
    children: [
      {
        path: '/1',
        component: Foo,
      },
    ],
  },
];
