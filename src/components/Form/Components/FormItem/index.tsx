import FormDataProps from '@/api/types/form';
import { defineComponent, PropType, ref, watchEffect } from 'vue';
import styles from './index.module.scss';

export const FormItem = defineComponent({
  props: {
    formData: {
      type: Object as PropType<FormDataProps>,
    },
    prop: {
      type: String,
    },
    label: {
      type: String,
    },
    rule: {
      type: Object as PropType<{
        key: string;
        message: string;
      }>,
    },
  },
  setup: (props, context) => {
    const children = context.slots.default?.();
    console.log(props.label);
    // const label = ref(props.label);
    // watchEffect(() => {
    //   label.value = props.label;
    // });
    return () => (
      <div class={styles.form_row}>
        <label class={styles.form_label}>
          <span class={styles.form_item_name}>{props.label}</span>
          {/* <span class={styles.form_item_name}>{context.slots.label?.()}</span> */}
          <div class={styles.form_item_value}>
            {children ? (
              children
            ) : (
              <input
                v-model={props.formData![props.prop!]}
                class={[
                  styles.form_item,
                  styles.input,
                  // errors['name']?.length ? styles.error : '',
                ]}
              />
            )}
          </div>
          <div class={styles.form_item_errorHint}>
            {/* <span>{errors['name']?.[0] ? errors['name']?.[0] : '　'}</span> */}
          </div>
        </label>
      </div>
    );
  },
});
