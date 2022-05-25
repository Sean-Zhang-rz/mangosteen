import { computed, defineComponent, PropType, reactive } from 'vue';
import FormDataProps, { Rules } from '@/api/types/form';
import styles from './index.module.scss';
export default function formItem<T>() {
  return defineComponent({
    props: {
      formData: {
        type: Object as PropType<FormDataProps>,
      },
      label: {
        type: String,
      },
      rule: {
        type: Object as PropType<Rules<T>[]>,
      },
      error: {
        type: String,
      },
    },
    setup: (props, context) => {
      const children = context.slots.default?.();

      const content = computed(() => {
        return (
          <div class={styles.form_item_value}>
            {children ? (
              children.map((c) => (
                <c
                  class={[
                    styles.form_item,
                    styles.input,
                    props.error?.length! > 1 ? styles.error : '',
                  ]}
                />
              ))
            ) : (
              <input
                onInput={(e: any) => {
                  context.emit('update:modelValue', e.target.value);
                }}
                class={[
                  styles.form_item,
                  styles.input,
                  props.error?.length! > 1 ? styles.error : '',
                ]}
              />
            )}
          </div>
        );
      });

      return () => (
        <div class={styles.form_row}>
          <label class={styles.form_label}>
            <span class={styles.form_item_name}>{props.label}</span>
            {content.value}
            <div class={styles.form_item_errorHint}>
              {/* <span>{props.error ? props.error : '　'}</span> */}
              <span>{props.error}</span>
            </div>
          </label>
        </div>
      );
    },
  });
}
