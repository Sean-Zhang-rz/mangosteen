import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { createPinia } from 'pinia';
import { fetchMe, me } from './api/common';
import '@svgstore';
import { App } from './App';
import { routes } from './config/routes';
import { history } from './utils/history';

const router = createRouter({ history, routes });

fetchMe();

router.beforeEach((to, from) => {
  if (
    ['/start', '/'].includes(to.path) ||
    to.path.startsWith('welcome') ||
    to.path.startsWith('/sign_in')
  ) {
    return true;
  } else {
    return me.then(
      () => true,
      () => '/sign_in?return_to=' + to.path
    );
  }
});
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
