import { defineComponent, PropType, reactive } from 'vue';
import FormDataProps, { Rules } from '@/api/types/form';
import styles from './index.module.scss';
import formItem from './Components/FormItem';
import { validate } from '@/utils/validateForm';

export default function form<T>() {
  return defineComponent({
    props: {
      formData: {
        type: Object as PropType<FormDataProps>,
        required: true,
      },
      rules: {
        type: Array as PropType<Rules<T>[]>,
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
        const rules: Rules<typeof props.formData>[] = [
          { key: 'name', type: 'required', message: '必填' },
          { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字符' },
          { key: 'sign', type: 'required', message: '必填' },
        ];
        Object.assign(errors, {
          name: undefined,
          sign: undefined,
        });
        Object.assign(errors, validate(props.formData, rules));
      };
      return () => (
        <form class={styles.form} onSubmit={onSubmit}>
          {context.slots.default?.().map((c) => {
            console.log(c?.props?.prop);
            console.log(c.type === formItem<{ [k in keyof typeof props.formData]?: string[] }>());

            return (
              <c
                formDara={FormData}
                v-model={props.formData[c?.props?.prop]}
                error={errors[c?.props?.prop] ? errors[c?.props?.prop]?.[0] : '　'}
              />
            );
          })}
        </form>
      );
    },
  });
}
