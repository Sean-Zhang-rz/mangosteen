import { defineComponent, PropType, reactive } from 'vue';
import FormDataProps, { Rules } from '@/api/types/form';
import styles from './index.module.scss';
import { validate } from '@/utils/validateForm';

export const Form = defineComponent({
  props: {
    formData: {
      type: Object as PropType<FormDataProps>,
      required: true,
    },
    rules: {
      type: Array as PropType<Rules[]>,
    },
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup: (props, context) => {
    const errors = reactive<{ [k in keyof typeof props.formData]?: string[] }>({});
    const onSubmit = (e: Event) => {
      e.preventDefault();
      checkInput();
    };
    const checkInput = () => {
      if (props.rules) {
        Object.assign(errors, {
          name: undefined,
          sign: undefined,
        });
        Object.assign(errors, validate(props.formData, props.rules));
      }
    };
    return () => (
      <form class={styles.form} onSubmit={onSubmit}>
        {context.slots.default?.().map((c) => {
          return (
            <c
              // formDara={FormData}
              v-model={props.formData[c?.props?.prop]}
              error={errors[c?.props?.prop] ? errors[c?.props?.prop]?.[0] : '　'}
            />
          );
        })}
      </form>
    );
  },
});
