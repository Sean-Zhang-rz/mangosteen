import { defineComponent } from 'vue';
import styles from './index.module.scss';

export const InputPad = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={styles.number_keyboard}>
        <div class={styles.number_keyboard__header}>header</div>
        <div class={styles.number_keyboard__body}>
          <div class={styles.number_keyboard__body_keys}></div>
        </div>
      </div>
    );
  },
});
