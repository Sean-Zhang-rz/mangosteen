import { defineComponent, PropType } from 'vue';
import styles from './index.module.scss';

export const Button = defineComponent({
  props: {
    level: {
      type: String as PropType<'important' | 'normal' | 'danger'>,
      required: true,
    },
    type: {
      type: String as PropType<'submit' | 'button'>,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  setup: (props, context) => {
    return () => (
      <button class={[styles.btn, styles[props.level]]} type={props.type}>
        {context.slots.default?.()}
      </button>
    );
  },
});
