import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute } from 'vue-router';
import logoSvg from '/src/assets/icons/logo.svg';
import styles from './index.module.scss';
import { useSwipe } from '../../hooks/useSwipe';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>();
    const { direction } = useSwipe(main);
    // watchEffect(() => {
    //   console.log(direction.value);
    // });

    return () => (
      <div class={styles.wrapper}>
        <header>
          <img src={logoSvg} />
          <h1>山竹记账</h1>
        </header>
        <main class={styles.main} ref={main}>
          <RouterView name="main" key={useRoute()?.params?.id.toString()}>
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={styles.enter_from}
                enterActiveClass={styles.enter_active}
                leaveActiveClass={styles.leave_active}
                leaveToClass={styles.leave_to}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" key={useRoute()?.params?.id.toString()} />
        </footer>
      </div>
    );
  },
});
