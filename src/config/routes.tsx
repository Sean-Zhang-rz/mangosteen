import { RouteRecordRaw } from 'vue-router';
import { ItemPage } from '@/pages/Item';
import { StartPage } from '@/pages/StartPage/inedx';
import { Welcome } from '@/pages/Welcome';
import { WelcomeAction } from '@/pages/Welcome/Components/Action';
import { WelcomeRender } from '@/pages/Welcome/Components/Render';
import { ItemList } from '@/pages/Item/components/List';
import { ItemCreate } from '@/pages/Item/components/Create';
import { TagPage } from '@/pages/Tag';
import { TagForm } from '@/pages/Tag/Components/TagForm';
import { SignInPage } from '@/pages/SignIn';
import { StatisticsPage } from '@/pages/Statistics';
import { useItemStore } from '@/stores/useItemStore';
import { ComingSoon } from '@/pages/CommingSoon';


export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    beforeEnter: (_, __, next) => {
      localStorage.getItem('skipFeature') === 'yes' ? next('/start') : next();
    },
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
    beforeEnter: async (_, __, next) => {
      const itemStore = useItemStore()
      await itemStore.fetchItems()
      if (itemStore.itemList.length) {
        next('/items')
      } else {
        next()
      }
    },
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
        path: ':id/edit',
        component: TagForm,
      },
      {
        path: 'create',
        component: TagForm,
      },
    ],
  },
  {
    path: '/sign_in',
    component: SignInPage,
  },
  {
    path: '/statistics',
    component: StatisticsPage,
  },
  {
    path: '/commin-soon',
    component: ComingSoon
  },
  {
    path: '/export',
    component: ComingSoon
  },
  {
    path: '/notify',
    component: ComingSoon
  },
];
