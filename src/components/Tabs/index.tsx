import { defineComponent } from 'vue';
import { Tab } from './Tab';
import styles from './index.module.scss';

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String,
      required: false,
    },
    classPrefix: {
      type: String,
    },
  },
  setup: (props, context) => {
    const cp = props.classPrefix;
    return () => {
      const childrenArray = context.slots.default?.();
      if (!childrenArray) return () => null;
      childrenArray.forEach((v) => {
        if (v.type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children');
        }
      });
      return (
        <div class={[styles.tabs, cp + '_tabs']}>
          <ol class={styles.tabs_nav}>
            {childrenArray.map((item) => (
              <li
                class={[
                  item.props?.name === props.selected ? [styles.selected, cp + '_selected'] : '',
                  cp + '_tabs_nav_item',
                ]}
                onClick={() => context.emit('update:selected', item.props?.name)}
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div>{childrenArray.find((content) => content.props?.name === props.selected)}</div>
        </div>
      );
    };
  },
});
