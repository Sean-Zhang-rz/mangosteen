import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { fetchMe, me } from './api/common';
import '@svgstore';
import { App } from './App';
import { routes } from './config/routes';
import { history } from './utils/history';

const router = createRouter({ history, routes });

fetchMe()

router.beforeEach(async (to, from) => {
  if (to.path === '/' || to.path === '/start' 
      || to.path.startsWith('welcome') || to.path.startsWith('/sign_in')) {
    return true
  } else {
    const path = await me.then(
      () => true, 
      () => '/sign_in?return_to=' + to.path
    )
    return path
  }
})
const app = createApp(App);
app.use(router);
app.mount('#app');
