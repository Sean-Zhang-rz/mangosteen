import { defineComponent } from 'vue';
import { Icon } from '../Icon';
import styles from './index.module.scss';

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => <Icon name="add" class={styles.icon} />;
  },
});
