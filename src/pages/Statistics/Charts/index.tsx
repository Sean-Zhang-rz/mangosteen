import { defineComponent, PropType } from 'vue';

import styles from './index.module.scss';

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => <div class={styles.wrapper}>图表</div>;
  },
});
