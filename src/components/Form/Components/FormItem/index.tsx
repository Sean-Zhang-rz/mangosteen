import { computed, defineComponent, PropType, ref } from 'vue';
import FormDataProps, { Rules } from '@/api/types/form';
import { DatetimePicker, Popup } from 'vant';
import { Time } from '@/utils/time';
import { Button } from '@/components/Button';
import styles from './index.module.scss';

export const FormItem = defineComponent({
  props: {
    // formData: {
    //   type: Object as PropType<FormDataProps>,
    // },
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
      type: Object as PropType<Rules>,
    },
    type: {
      type: String as PropType<'date' | 'validation' | 'select'>,
    },
    options: Array as PropType<Array<{ value: string; text: string }>>,
    error: String,
    placeholder: String,
    onClick: Function as PropType<((e: MouseEvent) => void) | undefined>
  },
  emits: ['update:modelValue'],
  setup: (props, context) => {
    const children = context.slots.default?.();
    const refDateVisible = ref(false);
    const content = computed(() => {
      return (
        <div class={styles.form_item_value}>
          {children ? (
            children.map((c) => <c class={props.error?.length! > 1 ? styles.error : ''} />)
          ) : (
            <>
              {props.type === 'select' ? (
                <select
                  class={[styles.form_item, styles.select]}
                  value={props.modelValue}
                  onChange={(e: any) => {
                    context.emit('update:modelValue', e.target.value);
                  }}
                >
                  {props.options?.map((option) => (
                    <option value={option.value}>{option.text}</option>
                  ))}
                </select>
              ) : (
                <>
                  {' '}
                  <input
                    value={props.modelValue}
                    readonly={props.type === 'date'}
                    placeholder={props.placeholder}
                    onInput={(e: any) => {
                      context.emit('update:modelValue', e.target.value);
                    }}
                    onClick={() => {
                      if (props.type === 'date') {
                        refDateVisible.value = true;
                      }
                    }}
                    class={[
                      styles.form_item,
                      styles.input,
                      props.type === 'validation' ? styles.validationCodeInput : '',
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
                  {props.type === 'validation' ? (
                    <Button class={[styles.formItem, styles.button, styles.validationCodeButton]}
                      onClick={props.onClick}>
                      发送验证码
                    </Button>
                  ) : null}
                </>
              )}
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

// export default function formItem<T>() {
//   return defineComponent({
//     props: {
//       formData: {
//         type: Object as PropType<FormDataProps>,
//       },
//       prop: {
//         type: String,
//       },
//       modelValue: {
//         type: [String, Number],
//       },
//       label: {
//         type: String,
//       },
//       // rule: {
//       //   type: Object as PropType<Rules<T>[]>,
//       // },
//       type: {
//         type: String as PropType<'date' | 'validation'>,
//       },
//       error: String,
//       placeholder: String,
//     },
//     emits: ['update:modelValue'],
//     setup: (props, context) => {
//       const children = context.slots.default?.();
//       const refDateVisible = ref(false);
//       const content = computed(() => {
//         return (
//           <div class={styles.form_item_value}>
//             {children ? (
//               children.map((c) => <c class={props.error?.length! > 1 ? styles.error : ''} />)
//             ) : (
//               <>
//                 <input
//                   value={props.modelValue}
//                   readonly={props.type === 'date'}
//                   placeholder={props.placeholder}
//                   onInput={(e: any) => {
//                     context.emit('update:modelValue', e.target.value);
//                   }}
//                   onClick={() => {
//                     if (props.type === 'date') {
//                       refDateVisible.value = true;
//                     }
//                   }}
//                   class={[
//                     styles.form_item,
//                     styles.input,
//                     props.type === 'validation' ? styles.validationCodeInput : '',
//                     props.error?.length! > 1 ? styles.error : '',
//                   ]}
//                 />
//                 {props.type === 'date' ? (
//                   <Popup position="bottom" v-model:show={refDateVisible.value} teleport="body">
//                     <DatetimePicker
//                       value={props.modelValue}
//                       type="date"
//                       title="选择年月日"
//                       onConfirm={(date: Date) => {
//                         context.emit('update:modelValue', new Time(date).format());
//                         refDateVisible.value = false;
//                       }}
//                       onCancel={() => (refDateVisible.value = false)}
//                     />
//                   </Popup>
//                 ) : null}
//                 {props.type === 'validation' ? (
//                   <Button class={[styles.formItem, styles.button, styles.validationCodeButton]}>
//                     发送验证码
//                   </Button>
//                 ) : null}
//               </>
//             )}
//           </div>
//         );
//       });

//       return () => (
//         <div class={styles.form_row}>
//           <label class={styles.form_label}>
//             <span class={styles.form_item_name}>{props.label}</span>
//             {content.value}
//             <div class={styles.form_item_errorHint}>
//               <span>{props.error}</span>
//             </div>
//           </label>
//         </div>
//       );
//     },
//   });
// }
