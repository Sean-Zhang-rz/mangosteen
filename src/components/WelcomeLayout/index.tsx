import { defineComponent } from 'vue';
import styles from './index.module.scss';

export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const {
      slots: { icons, title, buttons },
    } = context;
    return () => (
      <div class={styles.wrapper}>
        <div class={styles.card}>
          {icons?.()}
          {title?.()}
        </div>
        <div class={styles.actions}>{buttons?.()}</div>
      </div>
    );
  },
});
