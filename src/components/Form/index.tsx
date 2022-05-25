import { defineComponent, PropType } from 'vue';
import FormDataProps, { Rules } from '@/api/types/form';
import styles from './index.module.scss';

export default function form<T>() {
  return defineComponent({
    props: {
      formData: {
        type: Object as PropType<FormDataProps>,
      },
      rules: {
        type: Array as PropType<Rules<T>[]>,
      },
      onSubmit: {
        type: Function as PropType<(e: Event) => void>,
      },
    },
    setup: (props, context) => {
      return () => (
        <form class={styles.form} onSubmit={props.onSubmit}>
          {context.slots.default?.()}
        </form>
      );
    },
  });
}
