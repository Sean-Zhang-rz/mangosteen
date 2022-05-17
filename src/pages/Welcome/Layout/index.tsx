import { defineComponent } from 'vue';
import styles from './index.module.scss';

export const Layout = defineComponent({
  setup: (props, context) => {
    const {
      slots: { icon, title, buttons },
    } = context;

    return () => (
      <div class={styles.wrapper}>
        <div class={styles.card}>
          {icon?.()}
          {title?.()}
        </div>
        <div class={styles.actions}>{buttons?.()}</div>
      </div>
    );
  },
});
