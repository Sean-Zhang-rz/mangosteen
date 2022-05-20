import { defineComponent } from 'vue';
import { Tab } from './Tab';
import styles from './index.module.scss';

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String,
      required: false,
    },
  },
  setup: (props, context) => {
    return () => {
      const childrenArray = context.slots.default?.();
      if (!childrenArray) return () => null;
      childrenArray.forEach((v) => {
        if (v.type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children');
        }
      });
      return (
        <div class={styles.tabs}>
          <ol class={styles.tabs_nav}>
            {childrenArray.map((item) => (
              <li
                class={item.props?.name === props.selected ? styles.selected : ''}
                onClick={() => context.emit('update:selected', item.props?.name)}
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
        </div>
      );
    };
  },
});
