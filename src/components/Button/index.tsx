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
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  setup: (props, context) => {
    return () => (
      <button class={[styles.btn, styles[props.level || 'normal']]} type={props.type} onClick={props.onClick}>
        {context.slots.default?.()}
      </button>
    );
  },
});
