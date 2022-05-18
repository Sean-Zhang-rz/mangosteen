import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute } from 'vue-router';
import logoSvg from '/src/assets/icons/logo.svg';
import styles from './index.module.scss';
import { useSwipe } from '../../hooks/useSwipe';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement | null>(null);
    const { direction } = useSwipe(main);
    watchEffect(() => {
      console.log(direction.value);
    });

    return () => (
      <div class={styles.wrapper}>
        <header>
          <img src={logoSvg} />
          <h1>山竹记账</h1>
        </header>
        <main class={styles.main} ref={main}>
          <Transition
            enterFromClass={styles.enter_from}
            enterActiveClass={styles.enter_active}
            leaveActiveClass={styles.leave_active}
            leaveToClass={styles.leave_to}
          >
            <RouterView name="main" key={useRoute()?.params?.id.toString()}></RouterView>
          </Transition>
        </main>
        <footer>
          <RouterView name="footer" key={useRoute()?.params?.id.toString()} />
        </footer>
      </div>
    );
  },
});
