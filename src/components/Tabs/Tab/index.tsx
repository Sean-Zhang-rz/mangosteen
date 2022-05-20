import { defineComponent } from 'vue';

export const Tab = defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
