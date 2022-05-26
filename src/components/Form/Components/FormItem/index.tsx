import { computed, defineComponent, PropType, reactive, ref } from 'vue';
import FormDataProps, { Rules } from '@/api/types/form';
import styles from './index.module.scss';
import { DatetimePicker, Popup } from 'vant';
import { Time } from '@/utils/time';

export default function formItem<T>() {
  return defineComponent({
    props: {
      formData: {
        type: Object as PropType<FormDataProps>,
      },
      prop: {
        type: String,
      },
      modelValue: {
        type: [String, Number],
      },
      label: {
        type: String,
      },
      rule: {
        type: Object as PropType<Rules<T>[]>,
      },
      type: {
        type: String as PropType<'date'>,
      },
      error: {
        type: String,
      },
    },
    emits: ['update:modelValue'],
    setup: (props, context) => {
      const children = context.slots.default?.();
      const refDateVisible = ref(false);
      const content = computed(() => {
        return (
          <div class={styles.form_item_value}>
            {children ? (
              children.map((c) => (
                <c
                  class={[
                    // styles.form_item,
                    // styles.input,
                    props.error?.length! > 1 ? styles.error : '',
                  ]}
                />
              ))
            ) : (
              <>
                <input
                  value={props.modelValue}
                  onInput={(e: any) => {
                    context.emit('update:modelValue', e.target.value);
                  }}
                  readonly={props.type === 'date'}
                  onClick={() => {
                    if (props.type === 'date') {
                      refDateVisible.value = true;
                    }
                  }}
                  class={[
                    styles.form_item,
                    styles.input,
                    props.error?.length! > 1 ? styles.error : '',
                  ]}
                />
                {props.type === 'date' ? (
                  <Popup position="bottom" v-model:show={refDateVisible.value} teleport="body">
                    <DatetimePicker
                      value={props.modelValue}
                      type="date"
                      title="选择年月日"
                      onConfirm={(date: Date) => {
                        context.emit('update:modelValue', new Time(date).format());
                        refDateVisible.value = false;
                      }}
                      onCancel={() => (refDateVisible.value = false)}
                    />
                  </Popup>
                ) : null}
              </>
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
              <span>{props.error}</span>
            </div>
          </label>
        </div>
      );
    },
  });
}
