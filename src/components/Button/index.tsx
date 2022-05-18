import { defineComponent } from 'vue';
import styles from './index.module.scss';

interface ButtonProps {
  onClick: (e: MouseEvent) => void;
}
export const Button = defineComponent<ButtonProps>({
  setup: (props, context) => {
    return () => <button class={styles.btn}>{context.slots.default?.()}</button>;
  },
});
