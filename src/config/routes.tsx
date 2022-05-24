import { ItemPage } from '@/pages/Item';
import { RouteRecordRaw } from 'vue-router';
import { StartPage } from '@/pages/StartPage/inedx';
import { Welcome } from '@/pages/Welcome';
import { WelcomeAction } from '@/pages/Welcome/Components/Action';
import { WelcomeRender } from '@/pages/Welcome/Components/Render';
import { ItemList } from '@/pages/Item/components/List';
import { ItemCreate } from '@/pages/Item/components/Create';
import { TagPage } from '@/pages/Tag';
import { TagForm } from '@/pages/Tag/Components/TagForm';

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
  {
    path: '/items',
    component: ItemPage,
    children: [
      {
        path: '',
        component: ItemList,
      },
      {
        path: 'create',
        component: ItemCreate,
      },
    ],
  },
  {
    path: '/tags',
    component: TagPage,
    children: [
      {
        path: '',
        redirect: '/tags/show',
      },
      {
        path: ':type',
        component: TagForm,
      },
    ],
  },
];
