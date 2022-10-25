import { defineComponent, PropType } from 'vue';
import styles from './index.module.scss';

export const Button = defineComponent({
  props: {
    level: {
      type: String as PropType<'important' | 'normal' | 'danger'>,
      default: 'normal'
    },
    type: {
      type: String as PropType<'submit' | 'button'>,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  setup: (props, context) => {
    return () => (
      <button class={[styles.btn, props.disabled ? styles.disabled : '', styles[props.level || 'normal']]} type={props.type} disabled={props.disabled} onClick={props.onClick}>
        {context.slots.default?.()}
      </button>
    );
  },
});
