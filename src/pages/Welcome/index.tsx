import { defineComponent, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute } from 'vue-router';
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
          <Transition
            name="slide-fade"
            enterFromClass={styles.enter_from}
            enterActiveClass={styles.enter_active}
            leaveActiveClass={styles.leave_active}
            leaveToClass={styles.leave_to}
          >
            <RouterView name="main" key={parseInt(useRoute()?.params?.id.toString())}></RouterView>
          </Transition>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
