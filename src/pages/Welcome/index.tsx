import { defineComponent } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import logoSvg from '/src/assets/icons/logo.svg';
import styles from './index.module.scss';

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={styles.wrapper}>
        <header>
          <img src={logoSvg} />
          <h1>山竹记账</h1>
        </header>
        <main class={styles.main}>
          <RouterView key={parseInt(useRoute()?.params?.id.toString())} />
        </main>
      </div>
    );
  },
});
