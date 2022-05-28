import { FormItem } from '@/components/Form/Components/FormItem';
import { defineComponent, PropType, ref } from 'vue';

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
    const category = ref('expenses');

    return () => (
      <div class={styles.wrapper}>
        <FormItem
          v-model={category.value}
          label="类型"
          type="select"
          options={[
            { value: 'expenses', text: '支出' },
            { value: 'income', text: '收入' },
          ]}
        />
      </div>
    );
  },
});
