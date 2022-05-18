import { defineComponent, PropType } from 'vue';
import styles from './index.module.scss';

export type IconName = 'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig';

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => (
      <svg class={styles.icon}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    );
  },
});
