import { defineComponent, PropType } from 'vue';
import FormDataProps, { Rules } from '@/api/types/form';
import { FormItem } from './Components/FormItem';
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
    },
    setup: (props, context) => {
      const onSubmit = () => {};
      const children = context.slots.default?.();

      return () => (
        <form class={styles.form} onSubmit={onSubmit}>
          {children?.map((c) => {
            if (c.type !== FormItem) return <c />;
            return <c formData={props.formData} />;
          })}
        </form>
      );
    },
  });
}
