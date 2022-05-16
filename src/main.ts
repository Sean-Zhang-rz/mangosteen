import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { App } from './App';
import { Bar } from './pages/Bar';
import { Foo } from './pages/Foo';

const routes = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.mount('#app');
