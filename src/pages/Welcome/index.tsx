import { defineComponent, ref, Transition, watchEffect } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';
import logoSvg from '/src/assets/icons/logo.svg';
import styles from './index.module.scss';
import { useSwipe } from '../../hooks/useSwipe';
import { throttle } from '../../utils/throttle';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>();
    const router = useRouter();
    const route = useRoute();
    const { swiping, direction } = useSwipe(main);
    const pushRouter = throttle(() => {
      const pageId = parseInt(route?.params?.id.toString());
      if (pageId === 4) return;
      router.push(`/welcome/${pageId + 1}`);
    }, 500);
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        pushRouter();
      }
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
